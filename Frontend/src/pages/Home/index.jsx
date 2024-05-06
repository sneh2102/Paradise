import React from 'react';
import { useLocation } from 'react-router';
import { backToTop } from '../../utilities/utilities';
import Banner from './Banner';
import Feature from './Feature';
import Features from './Features';
import HappyClient from './HappyClient';
import ShowPlans from './ShowPlans';
import Reviews from './Reviews';
import Book from './Book';


const Home = () => {
    const location = useLocation();
    if (!location.hash) {
        backToTop();
    }

    return (
        <>
            <Banner />
            <Feature />
            <Features/>
            <ShowPlans />
            <Reviews/>       
            <Book/>
            <HappyClient />
             </>
    );
};

export default Home;