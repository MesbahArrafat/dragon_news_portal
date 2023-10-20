import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword   } from "firebase/auth";
import app from "../firebase/firebase.cofig";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loadding,setLoadding] = useState(true);
    //create user
    const createUser = (email,password) => {
        setLoadding(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //SignOut section
    const logOut = () =>{
        setLoadding(true);
        return signOut(auth);
    }
    //sign in
    const signIn = (email,password) =>{
        setLoadding(true);
      return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("User in the state",currentUser);
            setUser(currentUser);
            setLoadding(false);
        });
        return () =>{
            unSubscribe();
        }
    },[]);
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loadding,
    }
    return(
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;