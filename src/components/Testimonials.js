import React from 'react';
import ReviewImage1 from '../images/ReviewImage1.jpg'
import ReviewImage2 from '../images/ReviewImage2.jpg';
import ReviewImage3 from '../images/ReviewImage3.jpg';
import ReviewImage4 from '../images/ReviewImage4.jpg';

const Testimonials = () => {
    return (
        <section className="section testimonials">
            <div><h1>Testimonials</h1></div>
            <div className="testimonials-card">
                <div className="review">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <img src={ReviewImage1} alt="Customer Profile" className="profile-picture" />         
                    <p className="reviewText">
                        "Dining at Little Lemon was a delightful experience from start to finish. The ambiance was cozy and inviting, with charming decor and a relaxed atmosphere"
                    </p>
                    <p className="user-name">- Jhon S.</p>                    
                </div>
                <div className="review">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <img src={ReviewImage2} alt="Customer Profile" className="profile-picture" />         
                    <p className="reviewText">
                        "The menu offered a variety of options, all bursting with flavor and freshness. I particularly enjoyed their signature lemon-infused dishes, which added a unique twist to classic favorites."
                    </p>
                    <p className="user-name">- Sam</p>  
                </div>
                <div className="review">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <img src={ReviewImage3} alt="Customer Profile" className="profile-picture" />         
                    <p className="reviewText">
                        "The staff were attentive and friendly, making sure every aspect of our meal was enjoyable. Overall, Little Lemon exceeded my expectations, and I can't wait to dine there again."
                    </p>
                    <p className="user-name">- Edna Eyanger</p>  
                </div>
                <div className="review">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <img src={ReviewImage4} alt="Customer Profile" className="profile-picture" />         
                    <p className="reviewText">
                        "Dining at Little Lemon was a delightful experience from start to finish. The ambiance was cozy and inviting, with charming decor and a relaxed atmosphere"
                    </p>
                    <p className="user-name">- Mary Nam</p>  
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
