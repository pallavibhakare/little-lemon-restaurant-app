import React from 'react';
import restauranfood from '../images/restauranfood.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="section hero">
            <div className="hero-content">
                <div className='content'>
                    <div className="title">
                        <h1>Little Lemon </h1>
                        <h2>Chicago</h2>
                    </div>
                    <div className="subtitle">
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div className="home-button">                        
                        <Link to="/reservations">Reserve a Table</Link>
                    </div>
                </div>
            </div>
                <img className="hero-image" src={restauranfood} alt="Resturant food" />
        </section>
    );
};

export default Hero;