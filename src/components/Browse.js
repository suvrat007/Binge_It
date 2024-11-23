import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Search from "./Search";
import {useSelector} from "react-redux";

const Browse = () => {
    const showSearch = useSelector(store => store.search.showSearch);

    //fetching data from tmdb api and update store
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    return(
        <div>
            <Header/>
            {
                showSearch ? <Search /> : (
                    <>
                        <MainContainer/>
                        <SecondaryContainer/>
                    </>
                )
            }

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