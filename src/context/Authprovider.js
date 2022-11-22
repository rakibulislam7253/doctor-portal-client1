import React, { createContext, useEffect, useState } from 'react';
//  import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
//  import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading,setloading]=useState(true)
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const signIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateuser = (userInfo) => {
        return updateProfile(user, userInfo)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser);
            setloading(false)
        });
        return () => unsubscribe()
    }, [])


    const authInfo = {
        createUser,
        signIn,
        user,
        logout,
        updateuser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;