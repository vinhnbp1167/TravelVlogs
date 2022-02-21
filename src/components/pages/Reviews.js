import React from 'react'
import '../../App.css';
import { Button } from '../Button';
import '../HeroSection.css';

export default function Reviews() {
    return (
        <div className='reviews'>
            <div className='hero-container'>
                <h1>Guide others on their travels by telling us your experience!</h1>
                <div className='hero-btns'>
                <Button
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
            </div>
            </div>
            
            
        </div>
    );
}