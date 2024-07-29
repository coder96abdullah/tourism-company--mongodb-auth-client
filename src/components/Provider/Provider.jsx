import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth,signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null);
import app from '../../Firebase/firebase.config'
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoding]=useState(true);

 const logOut=()=>{
    setLoding(true);
    return signOut(auth)
 }
 const signIn=(email,password)=>{
    setLoding(true);
    return signInWithEmailAndPassword(auth,email,password);
 }
 useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    setLoding(false);
  });
  return ()=>{
    unSubscribe();
  } 
 },[])
    const createUser=(email,password)=>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo={
        user,
        createUser,
        logOut,
        signIn,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
          {children};  
        </AuthContext.Provider>
    );
};

export default AuthProvider;