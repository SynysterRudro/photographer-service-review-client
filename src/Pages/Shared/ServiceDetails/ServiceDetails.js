import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { title, price, img, description } = service;
    return (
        <div className='my-9'>
            <h2 className="text-5xl text-orange-500 text-center mb-5 font-bold">Service Details</h2>
            <div className="w-1/2 mx-auto card bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-orange-500 font-bold'>${price}</p>
                    <p title='read more by clicking button'>{description}</p>
                    <div className="card-actions justify-start">
                        <Link to='/services'><button className="btn btn-primary">Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;