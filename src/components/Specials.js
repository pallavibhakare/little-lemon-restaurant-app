import React from 'react';
import greeksalad from '../images/greeksalad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemondessert from '../images/lemondessert.jpg';
import basket from '../images/basket.svg';
import { Link } from 'react-router-dom';

const Specials = () => {
    return (
        <section className=" section specials">
            <div className="highlights">
                <div className="title">
                <h1>This weeks specials!</h1>
                </div>
                <div className='home-button'>                    
                    <Link to="/reservations">Online Menu</Link>
                </div>
            </div>
            <div className="specialDishes">
                <div className="dish">
                    <div >
                        <img  className="dish-image" src={greeksalad} alt="Greek Salad" width={300} height={200}/>
                    </div>
                    <div className="dish-details">
                        <div className='dish-title'>
                            <h3>Greek Salad</h3>
                            <h4 className='dish-price'>$12.99</h4>
                        </div>
                        <div className='dish-description'>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        </div>
                        <div className='delivery-order'>
                            <a href="#">
                                <span class="link-text">Order delivery</span>
                            </a>
                            <img src={basket} alt="delivery" />
                        </div>
                    </div>
                </div>
                <div className="dish">
                    <div >
                        <img className="dish-image" src={bruchetta} alt="Bruchetta" width={300} height={200}/>
                    </div>
                    <div className="dish-details">
                        <div className='dish-title'>
                            <h3>Bruchetta</h3>
                            <h4 className='dish-price'>$5.99</h4>
                        </div>
                        <div className='dish-description'>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        </div>
                        <div className='delivery-order'>
                            <a href="#">
                                <span class="link-text">Order delivery</span>
                            </a>
                            <img src={basket} alt="delivery" />
                        </div>
                    </div>
                </div>
                <div className="dish">
                    <div >
                        <img className="dish-image" src={lemondessert} alt="Lemon Dessert" width={300} height={200} />
                    </div>
                    <div className="dish-details">
                        <div className='dish-title'>
                            <h3>Lemon Dessert</h3>
                            <h4 className='dish-price'>$5.00</h4>
                        </div>
                        <div className='dish-description'>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        </div>
                        <div className='delivery-order'>
                            <a href="#">
                                <span class="link-text">Order delivery</span>
                            </a>
                            <img src={basket} alt="delivery" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specials;