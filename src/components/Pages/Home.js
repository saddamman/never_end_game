import React from 'react';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Home = () => {
    return(
        <div className="home-page">
            <Banner/>
            <Footer/>
        </div>
    );
}