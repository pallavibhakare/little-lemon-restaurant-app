import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Menu from './Menu';
import Reservations from './Reservations' ;
import OrderOnline from './OrderOnline' ;
import Login from './OrderOnline' ;

const Main = () => {
    return(
    <main className="main">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </main>
    );

};
export default Main;