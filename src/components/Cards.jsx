import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/banner.jpg'
import img4 from '../images/3.jpg'
import img5 from '../images/pic5.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out other amazing ways you can help FoodPlanet</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Check out our HungerMap'
              label='ReadMore'
              path='/HungerMap'
            />
            <CardItem
              src={img2}
              text='Help out with buying clothes at our shop'
              label='Read More'
              path='/Shop'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Learn more about us by clicking on this link'
              label='Read More'
              path='/About Us'
            />
            <CardItem
              src={img4}
              text='Selling mugs and t shirts to support local charities'
              label='Read More'
              path='/Shop'
            />
            <CardItem
              src={img5}
              text='Children need help in low economical developed countries'
              label='Read More'
              path='/Shop'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
