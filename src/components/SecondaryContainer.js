import MovieList from "./MovieList";
import {useSelector} from "react-redux";

const SecondaryContainer = () =>{
    const movies = useSelector(store => store.movies);
    return(
        movies.nowPlayingMovies &&(
            <div className=" bg-black">
                <div className="-mt-52 relative z-20 pl-12">
                    <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies} />
                    <MovieList title={"Top Rated"} movies ={movies.topRatedMovies} />
                    <MovieList title={"Popular"} movies ={movies.popularMovies} />
                    <MovieList title={"Upcoming"} movies ={movies.upcomingMovies} />

                </div>
        {/*
            MovieList - popular
                MovoeCard * n
            MovieList - Now PLaying
            MovieList - Trending
            MovieList - Horror
        */}
        </div>)
    )
}
export default SecondaryContainer;