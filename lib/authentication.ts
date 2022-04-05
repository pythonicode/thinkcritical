import { app, auth } from "./firebase";
import { handlePromise } from "./handlers";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export async function createAccount(email: string, password: string) {
    return await handlePromise(createUserWithEmailAndPassword(auth, email, password));  
}

export async function signIn(email: string, password: string) {
    return await handlePromise(signInWithEmailAndPassword(auth, email, password));
}

export async function signInWithGoogle() {
    return await handlePromise(signInWithPopup(auth, googleProvider));
}