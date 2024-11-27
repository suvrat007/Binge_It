import {useDispatch, useSelector} from "react-redux";
import {addTrailerVideo} from "../utils/movieSlice";
import {useEffect} from "react";
import {API_OPTIONS} from "../utils/constatants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(state => state.trailerVideo);
    // fetch trailer video and update the store with the video
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' +movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        console.log("THIS JSON" , json);
        const filterData = json.results.filter((video) => video?.type === "Trailer");


        // what if trailer don't have video
        const trailer = (filterData.length)? filterData[0] : json.results[0];

        // console.log("trailer = " ,trailer);
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        !trailerVideo && getMovieVideos();
    },[]);
}

export default useMovieTrailer;