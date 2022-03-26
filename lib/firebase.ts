import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const CLIENT_CONFIG = {
    apiKey: "AIzaSyCS_w-WdUZQ27fJs0WqlePLsFIDrSCp4jQ",
    authDomain: "think-critical.firebaseapp.com",
    projectId: "think-critical",
    storageBucket: "think-critical.appspot.com",
    messagingSenderId: "165292689811",
    appId: "1:165292689811:web:f2f740145f3f18de300066",
    measurementId: "G-0X08FC6E1H"
};

const app = initializeApp(CLIENT_CONFIG);
const auth = getAuth(app);

export { app, auth };