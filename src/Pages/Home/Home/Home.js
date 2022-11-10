import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Preview from '../Preview/Preview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>



            <Banner></Banner>
            <Services></Services>
            <Preview></Preview>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;