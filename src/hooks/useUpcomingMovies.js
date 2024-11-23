import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constatants";
import {addUpcomingMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const useUpcomingMovies = () =>{
    //fetching data from tmdb api and update store

    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch('\n' +
            'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;