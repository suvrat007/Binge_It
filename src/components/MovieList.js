import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log(movies);
    return (
        <div className="px-4">
            <h1 className="text-3xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar ">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path}/>))})
                    {/*<MovieCard posterPath={movies[0].poster_path} />*/}
                </div>
            </div>
        </div>
    )
};
export default MovieList;