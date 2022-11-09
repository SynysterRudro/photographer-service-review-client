import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/servicesLimit')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-9'>
            <h2 className="text-5xl text-orange-500 text-center font-bold">Services</h2>
            <div className='grid my-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
            <Link to='services'><p className='text-center'><button className="btn btn-primary">See all</button></p></Link>
        </div>
    );
};

export default Services;