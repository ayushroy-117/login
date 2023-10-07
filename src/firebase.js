import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDpOOFthNeg_IVDkVN6wRn54zb_-l5T28o",
    authDomain: "authentication-b55f9.firebaseapp.com",
    projectId: "authentication-b55f9",
    storageBucket: "authentication-b55f9.appspot.com",
    messagingSenderId: "810098704059",
    appId: "1:810098704059:web:6e11c4a8f77120c3b0f39e",
    measurementId: "G-LCXF7PE40Y",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {app, auth, provider};
