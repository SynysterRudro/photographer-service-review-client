import React from 'react';
import Banner from '../Banner/Banner';
import Preview from '../Preview/Preview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Preview></Preview>
        </div>
    );
};

export default Home;