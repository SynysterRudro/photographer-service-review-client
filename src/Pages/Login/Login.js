import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Welcome to Photo Mania. Our authentication system is very good because we are using google firebase which is maintained by google and I can assure you that you can trust google surely.</p>
                </div>
                <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className='mt-2'>New to Photo Mania?
                                    <Link to='/signup' className="label-text-alt text-sm link ml-2 link-hover">Create account </Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;