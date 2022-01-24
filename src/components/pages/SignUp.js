import React from 'react';
import '../../App.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function SignUp(){
    return( 
    <h1 className='sign-up'>
    <ScrollAnimation animateIn='flipInY'
    animateOut='flipOutY'>
    SIGN UP
    </ScrollAnimation> 
    </h1>
    );
}