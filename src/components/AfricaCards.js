import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function AfricaCards() {
  return (
    <div className='cards'>
      <h1>Africa is not a country, but it is a continent like none other. It has that which is elegantly vast or awfully little</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Morocco.jpg'
              text='The most popular country with tourists in Africa'
              label='Morocco'
              path='/reviews'
            />
            <CardItem
              src='/images/SouthAfrica.jpg'
              text='Visit several modern cities as well as national parks, beautiful coastlines, and vineyards'
              label='South Africa'
              path='/reviews'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Tunisia.jpg'
              text='Stay at luxurious resorts while enjoying the Mediterranean-like climate'
              label='Tunisia'
              path='/reviews'
            />
            <CardItem
              src='/images/Algeria.jpg'
              text='Explore through ancient cities and Arab-influenced architecture as well as plenty of outdoor adventures'
              label='Algeria'
              path='/reviews'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AfricaCards;