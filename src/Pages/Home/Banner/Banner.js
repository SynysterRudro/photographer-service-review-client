import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero h-80 my-9" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Photo Mania</h1>
                    <p className="mb-5">A personal photography service. A platform where customers can see Rudro's photography services and can give reviews unbiasedly and also see others review</p>
                    <Link to='/services'><button className="btn btn-primary">Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;