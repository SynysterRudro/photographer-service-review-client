import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // handling log out 
    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(err => console.error(err))
    }

    // console.log(user);
    return (<div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/myreview'>My Reviews</Link></li>
                    <li><Link to='/addservices'>Add Services</Link></li>


                </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">Photo Mania</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/myreview'>My Reviews</Link></li>
                <li><Link to='/addservices'>Add Services</Link></li>


            </ul>
        </div>
        <div className="navbar-end">
            {
                user?.uid ?
                    <>
                        <img className='rounded-full ' src={user?.photoURL} alt="img" />
                        <button onClick={handleLogOut} className="btn"> Logout</button>
                    </>
                    :
                    <Link to='/login' className="btn">Login</Link>
            }
        </div>
    </div>
    );
};

export default Header;