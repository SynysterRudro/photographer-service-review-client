import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  creating user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // logging in user 

    const emailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }


    const authInfo = {
        createUser,
        emailPasswordLogin,
        googleLogin
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;