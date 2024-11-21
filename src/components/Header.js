import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }
    return (
        <div className=" absolute py-2 px-8 w-screen z-10 bg-gradient-to-b from-black z-10  flex justify-between ">
            <img className="w-44" src="https://images.ladepeche.fr/api/v1/images/view/5ef4c376d286c26b7e37c5c8/large/image.jpg?v=1" alt="logo"/>

            {user && (<div className="flex p-2 justify-center">
                <img className="w-12 h-12" alt="usericon"
                     src={user?.photoURL}/>
                <button onClick={handleSignOut} className="font-bold text-white p-4 ">Sign Out</button>
                {/*<button  className="font-bold text-white p-4 ">Sign Out</button>*/}
            </div>)}

        </div>
    )
}
export default Header;