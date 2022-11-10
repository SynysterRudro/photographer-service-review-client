import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {

    // error messages state 
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setErrorMessage('');
                console.log(user);
                navigate('/');
            })
            .catch(err => setErrorMessage(err.message))
        // console.log(name, email, password);

    }

    return (
        <div>
            <div className="hero my-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Join us now!</h1>
                        <p className="py-6">Welcome to Photo Mania. Our authentication system is very good because we are using google firebase which is maintained by google and I can assure you that you can trust google surely.</p>
                    </div>
                    <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">UserName</span>
                                </label>
                                <input name='name' type="text" placeholder="username" className="input input-bordered" />
                            </div>
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
                                    <p className='mt-2'>Already Have an account?
                                        <Link to='/login' className="label-text-alt text-sm link ml-2 link-hover">Login instead </Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        {errorMessage && <p className='text-red-600 text-center py-2'>{errorMessage}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;