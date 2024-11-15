// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn-qWq1HhxJC2DmE8LUo9YO0qsdXJVBkI",
    authDomain: "netflixgpt-f53e8.firebaseapp.com",
    projectId: "netflixgpt-f53e8",
    storageBucket: "netflixgpt-f53e8.firebasestorage.app",
    messagingSenderId: "429007834792",
    appId: "1:429007834792:web:60fb8d8cf0ef0989487c9d",
    measurementId: "G-PM0RH2W89B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();