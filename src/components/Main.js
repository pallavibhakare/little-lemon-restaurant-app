import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import BookingPage from './BookingPage' ;
import OrderOnline from './OrderOnline' ;
import Login from './OrderOnline' ;

const Main = () => {
    return(
    <main className="main">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<BookingPage /> } />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </main>
    );

};
export default Main;