import Header from './Header';
import {useRef, useState} from "react";
import {checkValidateData} from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/UserSlice";
import {BG_URL, USER_AVATAR} from "../utils/constatants";


const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();


    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick= () =>{
        // Validate the form data
        // console.log(email.current.value, email.current.value);
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        // sign in/ sign up
        if(!isSignInForm){
            //SignUp
            createUserWithEmailAndPassword(auth, email.current.value,  password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user);

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR ,
                    }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName,photoURL,} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL,}));
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                        // ...
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode +" " + errorMessage);
                });

        }else{
            //SignIn

            signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("this error");
                    setErrorMessage(errorCode +" " + errorMessage);
                });
        }
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                    src={BG_URL}
                    alt="background-img"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-85">
                <h1 className="font-bold text-3xl py-3 my-2 text-white">{isSignInForm ? "Log In" : "Sign Up"}</h1>
                { !isSignInForm && <input type="text" ref={name} placeholder="Full Name" className="p-3 my-3 w-full bg-gray-700 rounded-lg"/>}
                <input ref={email} autoComplete="username" type="text" placeholder="Email Id" className="p-3 my-3 w-full bg-gray-700 rounded-lg"/>
                <input ref={password} autoComplete="current-password" type="password" placeholder="Password" className="p-3 my-3 w-full bg-gray-700 rounded-lg"/>
                <p className="text-red-400">{errorMessage}</p>
                <button type="submit"
                        onClick={handleButtonClick}
                        className="p-3 my-3 w-full bg-red-700 text-white rounded-lg">{isSignInForm ? "Log In" : "Sign Up"
                        }</button>
                <p className="my-3 text-white cursor-pointer" onClick={toggleSignIn}>
                    {isSignInForm ? "New here? Sign Up NOW !" : "Already a user? Log In here."}</p>
            </form>
        </div>

    )
}
export default Login;