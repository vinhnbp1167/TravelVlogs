import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function EuropeCards() {
  return (
    <div className='cards'>
      <h1>The construction of Europe is an art. It is the art of the possible</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Rome.jpg'
              text='The aroma of fresh Italian cooking wafts through the alleys, and historical sights stand proudly at every turn'
              label='Rome'
              path='/reviews'
            />
            <CardItem
              src='/images/France.jpg'
              text='Wandering through exhibits at the Louvre and strolling through the beautiful green space admiring flowers'
              label='France'
              path='/reviews'
            />
            <CardItem
              src='/images/England.jpg'
              text='Exploring the world-class British Museum, seeing a musical in the West End theater district, touring the Tower of London and gorging on fish and chips or a Sunday roast at a local pub'
              label='England'
              path='/reviews'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Greece.jpg'
              text='Visit this Greek island for its unique volcanic landscape, relaxing beaches and picturesque local architecture'
              label='Greece'
              path='/reviews'
            />
            <CardItem
              src='/images/Italy.jpg'
              text="Travelers of all kinds will be impressed with Venice, Italy's enchanting canals, historical architecture and delectable eateries"
              label='Italy'
              path='/reviews'
            />
            <CardItem
              src='/images/Germany.jpg'
              text="More than three decades since the fall of the Berlin Wall, Germany's capital city boasts everything from museums and monuments to thriving dining and nightclub scenes"
              label='Germany'
              path='/reviews'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EuropeCards;