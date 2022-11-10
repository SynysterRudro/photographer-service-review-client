import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceCard from '../Home/Services/ServiceCard';
import Spinner from '../Shared/Spinner/Spinner';

const Services = () => {

    // loading for spinner 
    const { loading } = useContext(AuthContext)
    // adding services 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://photographer-service-review-server-nb3pfkb2i-synysterrudro.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-9'>


            {
                loading ? <Spinner></Spinner> : <></>
            }

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