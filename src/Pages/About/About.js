import React from 'react';
import './About.css'
// import mycapture from '../../../images/mycapture.jpg';
import ali from '../../../src/images/ali.JPG'

const About = () => {
    return (
        <div className='wrapper'>

            <div class="product-img">
                <img className='w-100 h-75' src={ali} alt="" />
            </div>

            <div className='product-info'>
                <div className='product-text'>
                    <h1>Md. Ali Hossain</h1>
                    <h2>CSE, Khulna University</h2>
                    <p>Hi, I am Ali. I am a student of Khulna University. I love to coding.
                        I want to  <br /> be a Full Stack Web Developer in Future.</p>

                </div>
                <div class="product-price-btn">

                    <button type="button">Hire Me</button>
                </div>

            </div>


        </div>
    );
};

export default About;