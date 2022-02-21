import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function AsiaCards() {
  return (
    <div className='cards'>
      <h1>Asia is rich in people, rich in culture and rich in resources</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Vietnam.jpg'
              text="One of Southeast Asia’s most beautiful countries, attracting travellers to its lush mountains, bustling cities and golden sand beaches"
              label='Vietnam'
              path='/reviews'
            />
            <CardItem
              src='/images/Japan.jpg'
              text='An eclectic mix of past, present, and future, combining ancient samurai traditions and an impressive history with a modern-day persona and new world technology'
              label='Japan'
              path='/reviews'
            />
            <CardItem
              src='/images/China.jpg'
              text='China boasts a large number of wonderful attractions including antique sites and relics, imposing imperial palaces, delicate water towns, amazing natural wonders, splendid cultural heritage, and diversified folk customs'
              label='China'
              path='/reviews'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Indonesia.jpg'
              text='Its natural beauty has become a tourist destination that is much coveted by both local and international travelers from around the world'
              label='Indonesia'
              path='/reviews'
            />
            <CardItem
              src='/images/Singapore.jpg'
              text='Known as one of the cleanest countries in the world, Singapore also offering different perspective of life in terms of culture, religion, food, language and history'
              label='Singapore'
              path='/reviews'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AsiaCards;