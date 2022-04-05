import { useState, useContext, createContext, FC, useEffect } from "react";
import { auth } from "../../lib/firebase";
import type { User } from 'firebase/auth'

type FirebaseUser = User | null;
type ContextState = { user: FirebaseUser };

const FirebaseContext = createContext<ContextState | undefined>(undefined);

const FirebaseProvider: FC = ({children}) => {
    const [user, setUser] = useState<FirebaseUser>(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return unsubscribe;
    })

    const context = {
        user,
    }

    return (
        <FirebaseContext.Provider value={context}>
            {children}
        </FirebaseContext.Provider>
    )
}

function useFirebase() {
    const context = useContext(FirebaseContext);
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      );
    }
    return context;
  }
  
  export { FirebaseProvider, useFirebase };