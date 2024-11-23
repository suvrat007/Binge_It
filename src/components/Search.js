import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import {BG_URL} from "../utils/constatants";

const Search = () => {
    return(
        <div>
            <div className="absolute -z-10">
                <img
                    src= {BG_URL}
                    alt="background-img"/>
            </div>
            <SearchBar/>
            <MovieSuggestions/>
        </div>
    );
};
export default Search;