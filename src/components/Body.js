import Login from "./Login";
import Browse from "./Browse";
import {useEffect} from "react";
import {createBrowserRouter, useNavigate} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/UserSlice";

const Body = () =>{

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ]);


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;