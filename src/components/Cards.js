import React from 'react'
import Carditems from './Carditems'
import './Cards.css';
import ScrollAnimation from 'react-animate-on-scroll';



function Cards() {
    
    return (
        <div className='cards'> 
          <h1>Check out these epic Destination!</h1>
          <div className="cards__container">
              <div className="cards__wrapper">
                  <ul className="cards__items">
                  <ScrollAnimation animateIn='rotateIn'>
                      <Carditems 
                      src='/images/website-img8.jpeg'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod fringilla diam.'
                      label='Adventure'
                      path='/services'
                      />
                      </ScrollAnimation>
                      <ScrollAnimation animateIn='rotateIn'>
                      <Carditems 
                      src='/images/website-img2.jpeg'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod fringilla diam.'
                      label='Adventure'
                      path='/services'
                      />
                    </ScrollAnimation>
                  </ul>
                  <ul className="cards__items">
                  <ScrollAnimation animateIn='fadeIn'>
                      <Carditems 
                      src='/images/website-img3.jpeg'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod fringilla diam.'
                      label='Adventure'
                      path='/services'
                      />
                      </ScrollAnimation>
                      <ScrollAnimation animateIn='fadeIn'>
                      <Carditems 
                      src='/images/website-img4.jpeg'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod fringilla diam.'
                      label='Adventure'
                      path='/services'
                      />
                      </ScrollAnimation>
                      <ScrollAnimation animateIn='fadeIn'>
                      <Carditems 
                      src='/images/website-img5.jpeg'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod fringilla diam.'
                      label='Adventure'
                      path='/services'
                      />
                    </ScrollAnimation>
                  </ul>
              </div>
          </div>
        </div>
    )
}

export default Cards
