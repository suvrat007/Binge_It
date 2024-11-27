import lang from "../utils/LanguageConstant";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";

import {API_OPTIONS} from "../utils/constatants";
import {addGptMovieResult} from "../utils/searchSlice";
import model from "../utils/geminiAi";

const SearchBar = () =>{
    const dispatch = useDispatch();
    const langKey =  useSelector(store => store.config.lang);
    const searchText = useRef(null);
    // search movie
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=true&page=1', API_OPTIONS)
        const json = await data.json();
        console.log("now"+json.results);
        return json.results;
    }

    const handleGptSearchClick= async () => {
        // make api call for movies results
        const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query "+ searchText.current.value +" only give the names of 5 movies , comma seperated like the example result given ahead  " +
            "example: avengers,sholay,iron man,thor,interstellar";

        const result=await model.generateContent(gptQuery);
        if(!result.response.text()){
            console.log("error")
            //build error page or something
        }

        console.log(result.choices?.[0]?.message?.content);
        const gptMovies = result?.response?.text()?.split(", ");     // we get array of movies

        // for each movie try to search for tmdb api
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        console.log(promiseArray);
        const tmdbResults = await Promise.all(promiseArray);  // when all the promises or movies are reaserched or resolved then only the variable will have all the values


        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }
    return(
        <div className="pt-[45%] md:pt-[10%] flex items-center justify-center">
            <form className="w-full md:w-1/2 p-1 bg-black grid grid-cols-12 rounded-lg"
            onSubmit={(e) =>{e.preventDefault()}}>
                <input ref={searchText} type="text" className="p-4 m-2  col-span-9 rounded-lg" placeholder={lang[langKey].searchPlaceholder} />
                <button type="submit" className="py-2 px-2 m-2 bg-red-700 text-white rounded-lg col-span-3"
                onClick={handleGptSearchClick}>{lang[langKey]?.search}</button>
            </form>
        </div>
    )
 };
 export default SearchBar;