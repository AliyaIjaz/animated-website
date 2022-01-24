import React from 'react';
import '../../App.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Services(){
    return ( 
    
    <h1 className='services'>
    <ScrollAnimation animateIn='flipInY'
    animateOut='flipOutY'>
    SERVICES
    </ScrollAnimation>
    </h1>

    );
}