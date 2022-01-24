import React from 'react';
import '../../App.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Products(){
    return (
    <h1 className='products'>
    <ScrollAnimation animateIn='flipInY'
    animateOut='flipOutY'>
    PRODUCTS
    </ScrollAnimation> 
    </h1>
    );
}