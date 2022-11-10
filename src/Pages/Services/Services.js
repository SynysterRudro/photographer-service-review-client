import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';

const Services = () => {

    // adding services 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-9'>
            <h2 className="text-5xl text-orange-500 text-center font-bold">Services</h2>
            <div className='w-11/12 mx-auto grid gap-6 my-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* mapping each services  */}
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
        </div>
    );
};

export default Services;