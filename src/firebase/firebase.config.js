// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0NISiSRfNv2ZcqYEiu4dkJyqbJ_hJaeg",
    authDomain: "photo-mania-98f2f.firebaseapp.com",
    projectId: "photo-mania-98f2f",
    storageBucket: "photo-mania-98f2f.appspot.com",
    messagingSenderId: "548252533938",
    appId: "1:548252533938:web:5eb088f44083b8c8a735ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;