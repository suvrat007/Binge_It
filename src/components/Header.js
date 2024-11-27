import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, removeUser} from "../utils/UserSlice";
import {LOGO, SUPPORTED_LANGUAGES} from "../utils/constatants";
import {toggleSearchView} from "../utils/searchSlice";
import {changeLanguage} from "../utils/configSlice";

const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showSearch = useSelector(store => store.search.showSearch);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }
    const handleSearchClick = () => {
        // toggle the search
        dispatch(toggleSearchView());
    }
    const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.currentTarget.value));
    }


    const dispatch = useDispatch();

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName,photoURL,} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL,}));
                navigate("/Browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // unsubscribe when components unmount
        return () => unsubscribe();
    },[]);
    return (
        <div className=" absolute py-2 md:px-8 px-2 text-[1em] w-screen z-10 bg-gradient-to-b from-black z-10  flex flex-col md:flex-row justify-between ">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"/>

            {user && (
                <div className="flex justify-between  p-2 justify-center">
                {showSearch && (<select className="p-2 m-2 rounded-lg bg-gray-800 text-white"
                onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>)}
                <button className="py-2 px-4 mx-2 md:mx-4 my-2 bg-white text-black rounded-lg"
                onClick={handleSearchClick}>
                    {showSearch? "Homepage" : "Search Movies"}
                </button>
                <img className="hidden rounded-lg md:block w-12 h-12" alt="usericon"
                     src={user?.photoURL}/>
                <button onClick={handleSignOut} className="font-bold text-white p-4 ">Sign Out</button>
                {/*<button  className="font-bold text-white p-4 ">Sign Out</button>*/}
            </div>)}

        </div>
    )
}
export default Header;