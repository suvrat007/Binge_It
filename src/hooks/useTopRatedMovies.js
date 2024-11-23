import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constatants";
import {addTopRatedMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const useTopRatedMovies = () =>{
    //fetching data from tmdb api and update store

    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch('\n' +
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;