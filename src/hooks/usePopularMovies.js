import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../utils/constatants";
import {addPopularMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const usePopularMovies = () =>{
    //fetching data from tmdb api and update store

    const dispatch = useDispatch();

    const popularMovies = useSelector(
        (store) => store.movies.popularMovies
    );

    const getPopularMovies = async () => {
        const data = await fetch('\n' +
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        !popularMovies && getPopularMovies();
    },[])
}

export default usePopularMovies;