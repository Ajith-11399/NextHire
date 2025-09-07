import React from 'react';
import Hero from '../components/Hero';
import JobListing from '../components/JobListing';
import AppDownload from '../components/AppDownload';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedCompanies from '../components/FeaturedCompanies';

const Home = () => {
    return (
        <>  
            <Navbar />
            <Hero />
            <FeaturedCompanies />
            <JobListing />
            <AppDownload />
            <Footer />
        </>
    );
};

export default Home;