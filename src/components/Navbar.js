import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import useWebAnimations, { bounceInLeft, bounceInRight } from '@wellyshen/use-web-animations';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const logoMove = useWebAnimations({ ...bounceInLeft });
    // const homeMove = useWebAnimations({...bounceInRight})
    const serviceMove = useWebAnimations({ ...bounceInRight })
    const productsMove = useWebAnimations({ ...bounceInRight })
    

    const { keyframes, animationOptions } = bounceInRight;
    const homeMove = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1000, // Delay 1s
            duration: animationOptions.duration * 0.75, // Speed up the animation
        },
    });

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link
                        to='/'
                        className='navbar-logo' ref={logoMove.ref}
                        onClick={closeMobileMenu}>
                        TRVL <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                to='/' className='nav-links' ref={homeMove.ref}
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                className='nav-links' ref={serviceMove.ref}
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/products'
                                className='nav-links' ref={productsMove.ref}
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar

