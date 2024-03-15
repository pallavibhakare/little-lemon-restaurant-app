import React from 'react';
import MarioAndAdrianB from '../images/MarioAndAdrianB.jpg';
import MarioAndAdrianA from '../images/MarioAndAdrianA.jpg';

const About = () => {
    return (
        <section className="section about">
            <div className='brother-details'>
                <div className='content'>
                    <div className="title">
                        <h1>Little Lemon </h1>
                        <h2>Chicago</h2>
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
    );
};

export default About;