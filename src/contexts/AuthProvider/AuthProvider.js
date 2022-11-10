import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  creating user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        createUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;