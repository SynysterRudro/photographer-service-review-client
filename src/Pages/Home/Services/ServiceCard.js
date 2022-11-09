import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCard = ({ service }) => {
    const { _id, title, price, img, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-500 font-bold'>${price}</p>
                <p title='read more by clicking button'>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;