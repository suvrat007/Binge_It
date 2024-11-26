import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import {BG_URL} from "../utils/constatants";

const Search = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    className=""
                    src={BG_URL}
                    alt="background-img"/>
            </div>
            <div className="">
                    <SearchBar/>
                    <MovieSuggestions/>
            </div>

        </>
    )

    ;
};
export default Search;