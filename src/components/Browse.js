import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    //fetching data from tmdb api and update store
    useNowPlayingMovies();
    usePopularMovies();
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        {/*    main container
                    - video background
                    - video title
               secondary container
                    -movielist * n
                        -cards * n
                                */}
        </div>
    )
}
export default Browse;