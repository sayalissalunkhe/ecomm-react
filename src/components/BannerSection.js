import React from 'react';
import { Button } from './Button';
import './BannerSection.css';



function BannerSection() {
    return (
        <div className='hero-container'>
            <video src="https://www.youtube.com/watch?v=eGyjPnppZxo" autoPlay="" loop="" muted="" />

            <video loop autoPlay>
                <source src="https://www.youtube.com/watch?v=eGyjPnppZxo" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>

            <div className='banner-content'>
                <h1>Maitri Diamonds</h1>
                <p>Discover the world's first fully traceable, 100% Climate Neutral and Sustainability Rated diamonds
                    — grown in our Indian laboratory using our patenteadscadcd CVD technology.</p>

                <div className='hero-btn mr-4'>
                    <Button className="btns" buttonStyle="btn__primary" buttonSize="btn__large">
                        Diamonds
                    </Button>
                    <Button className="btns" buttonStyle="btn__primary" buttonSize="btn__large">
                        Jewelry
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BannerSection; 
