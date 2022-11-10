import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth'
import { FaGoogle } from "react-icons/fa";


const googleProvider = new GoogleAuthProvider();

const Login = () => {

    // navigation 
    const navigate = useNavigate();

    const { emailPasswordLogin, googleLogin } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');


    // email password login 
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        emailPasswordLogin(email, password)
            .then(result => {
                const user = result.user;
                setErrorMessage('');
                console.log(user);
                navigate('/');
            })
            .catch(err => setErrorMessage(err.message))
    }

    // google login 
    const loginUsingGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setErrorMessage('');
                console.log(user);
                navigate('/');
            })
            .catch(err => setErrorMessage(err.message))
    }

    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Welcome to Photo Mania. Our authentication system is very good because we are using google firebase which is maintained by google and I can assure you that you can trust google surely.</p>

                    <h2 className="text-3xl">
                        Or log in using Google
                        <br />
                        <button onClick={loginUsingGoogle}><FaGoogle className='my-4 hover:text-violet-500 font-bold'></FaGoogle></button>
                    </h2>
                </div>
                <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className='mt-2'>New to Photo Mania?
                                    <Link to='/signup' className="label-text-alt text-sm link ml-2 link-hover">Create account </Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    {
                        errorMessage && <p className='text-red-600 text-center py-2'>{errorMessage}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;