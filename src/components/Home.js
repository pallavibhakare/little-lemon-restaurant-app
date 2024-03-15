import React from 'react';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Hero from './Hero';

const Home = () => {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
};

export default Home;