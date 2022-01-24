import React from 'react'
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function Footer() {
    return (
        <ScrollAnimation animateIn='fadeIn'>
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                        />
                        <Button 
                        buttenStyle='btn--outline'>
                        Subscribe
                        </Button>
                    </form>
                </div>
            </section>  
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Investors</Link>
                        <Link to='/sign-up'>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to='/'>Contacts</Link>
                        <Link to='/'>support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                        
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>FaceBook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Linkedin</Link>
                        <Link to='/'>Google</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className="social-media-wrap">
               
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                   
                    <small className='website-rights'>TRVL @ 2022</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to='/'
                        target='_blank'
                        aria-label='youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to='/'
                        target='_blank'
                        aria-label='linkedin'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
           
        </div>
        </ScrollAnimation>
    )
}

export default Footer;
