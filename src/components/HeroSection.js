import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import useWebAnimations, { fadeIn } from '@wellyshen/use-web-animations';

function HeroSection() {

    const textFadeIn = useWebAnimations({ ...fadeIn });
    //const paraFadeIn = useWebAnimations({ ...fadeIn });

    const { keyframes, animationOptions } = fadeIn;
    const paraFadeIn = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1000, // Delay 1s
            duration: animationOptions.duration * 2, // Speed down the animation
        },
    });

    return (
        <div className='hero-container'>
            <video src='/videos/video.mp4' autoPlay loop muted />
                <h1 ref={textFadeIn.ref}>ADVENTURE AWAITS</h1>
                <p ref={paraFadeIn.ref}>What are you waiting for?</p>
                <div className="hero-btns">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Get Started
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                    >
                        WATCH TRAILER <i className="far fa-play-circle" />
                    </Button>
                </div>
            </div>
    )
}

export default HeroSection
