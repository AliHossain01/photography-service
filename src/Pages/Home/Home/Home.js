import React from 'react';
import Banner from '../Banner/Banner';
import Portfolios from '../Portfolios/Portfolios';
import Services from './../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Portfolios></Portfolios>

        </>
    );
};

export default Home;