import { app, auth } from "./firebase";
import { handlePromise } from "./handlers";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createAccount(email: string, password: string) {
    return await handlePromise(createUserWithEmailAndPassword(auth, email, password));  
}