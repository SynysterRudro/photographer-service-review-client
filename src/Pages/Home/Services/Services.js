import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    // loading for spinner 
    const { loading } = useContext(AuthContext)


    console.log(loading);


    useEffect(() => {
        fetch('https://photographer-service-review-server-nb3pfkb2i-synysterrudro.vercel.app/servicesLimit')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className='my-9'>

            {
                loading ? <Spinner></Spinner> : <></>
            }

            <h2 className="text-5xl text-orange-500 text-center font-bold">Services</h2>
            <div className='w-11/12 mx-auto gap-6 grid my-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
            <Link to='services'><p className='text-center '><button className="btn btn-primary px-10">See all</button></p></Link>
        </div>
    );
};

export default Services;