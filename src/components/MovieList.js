import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log(movies);
    return (
        <div className="py-2 md:py-4  px-6 md:px-10">
            <h1 className="text-lg md:text-3xl py-2 text-white">{title}</h1>
            <div className="flex shadow-black shadow-xl overflow-x-scroll ">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
                    {/*<MovieCard posterPath={movies[0].poster_path} />*/}
                </div>
            </div>
        </div>
    )
};
export default MovieList;