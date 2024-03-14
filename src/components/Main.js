import restauranfood from '../images/restauranfood.jpg';
import greeksalad from '../images/greeksalad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemondessert from '../images/lemondessert.jpg';
import basket from '../images/basket.svg';
import MarioAndAdrianB from '../images/MarioAndAdrianB.jpg';
import MarioAndAdrianA from '../images/MarioAndAdrianA.jpg';

const Main = () => {
    return(
    <main className="main">
        <section className="section hero"> 
            <div className="hero-content">
                <div className='content'>
                    <div className="title">
                        <h1>Little Lemon </h1>
                        <h3>Chicago</h3>
                    </div>
                    <div className="subtitle">
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div className="reserve-table">
                        <button>Reserve a Table</button>
                    </div>
                </div>
            </div>
                <img className="hero-image" src={restauranfood} alt="Resturant food" />
            
        </section>
        <section className=" section specials">
            <div className="highlights">
                <div className="title">
                <h1>This weeks specials!</h1>
                </div>
                <div>
                    <button>Online Menu</button>
                </div>
            </div>
            <div className="specialDishes">
                <div className="dish">
                    <div >
                        <img  className="dish-image" src={greeksalad} alt="Greek Salad" width={300} height={200}/>
                    </div>
                    <div className="dish-details">
                        <div className='dish-title'>
                            <h2>Greek Salad</h2>
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
                            <h2>Bruchetta</h2>
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
                            <h2>Lemon Dessert</h2>
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
        <section className="section testimonials">
            <div><h1>Testimonials</h1></div>
            <div className="ratings">
                <div className="review">
                    <h6>Name</h6>
                    <img src="" alt="Review1" />
                    <p className="reviewText">Review text</p>
                </div>
                <div className="review">
                    <h6>Name</h6>
                    <img src="" alt="Review2" />
                    <p className="reviewText">Review text</p>
                </div>
                <div className="review">
                    <h6>Name</h6>
                    <img src="" alt="Review1" />
                    <p className="reviewText">Review text</p>
                </div>
                <div className="review">
                    <h6>Name</h6>
                    <img src="" alt="Review1" />
                    <p className="reviewText">Review text</p>
                </div>
            </div>
        </section>
        <section className="section about">
            <div className='brother-details'>
                <div className='content'>
                    <div className="title">
                        <h1>Little Lemon </h1>
                        <h3>Chicago</h3>
                    </div>
                    <div className="subtitle">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>                    
                </div>
            </div>
            <div className='brothers'>
                <img className="image1" src={MarioAndAdrianB} alt="Mario and Adrian B" />
                <img className="image2" src={MarioAndAdrianA} alt="Mario and Adrian A"/>
            </div>
        </section>
    </main>
    );
    
};
export default Main;