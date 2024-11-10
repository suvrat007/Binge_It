import Header from './Header';
import {useState} from "react";
const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
                    alt="background-img"/>
            </div>
            <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-85">
                <h1 className="font-bold text-3xl py-3 my-2 text-white">{isSignInForm ? "Log In" : "Sign Up"}</h1>
                { !isSignInForm && <input type="text" placeholder="Full Name" className="p-3 my-3 w-full bg-gray-700 rounded-lg"/>}
                <input type="text" placeholder="Email Id" className="p-3 my-3 w-full bg-gray-700 rounded-lg"/>
                <input type="password" placeholder="Password" className="p-3 my-3 w-full bg-gray-700 rounded-lg"/>
                <button type="submit"
                        className="p-3 my-3 w-full bg-red-700 text-white rounded-lg">{isSignInForm ? "Log In" : "Sign Up"}</button>
                <p className="my-3 text-white cursor-pointer" onClick={toggleSignIn}>
                    {isSignInForm ? "New here? Sign Up NOW !" : "Already a user? Log In here."}</p>
            </form>
        </div>

    )
}
export default Login;