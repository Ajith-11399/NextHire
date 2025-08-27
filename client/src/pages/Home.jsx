import React from 'react';
import Hero from '../components/Hero';
import JobListing from '../components/JobListing';
import AppDownload from '../components/AppDownload';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>  
            <Navbar />
            <Hero />
            <JobListing />
            <AppDownload />
            <Footer />
        </>
    );
};

export default Home;