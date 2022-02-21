import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function NorthAmericaCards() {
  return (
    <div className='cards'>
      <h1>The whole object of travel is not to set foot on foreign land it is at last to set foot on one's own country as a foreign land</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Canada.jpg'
              text='From its gorgeous islands to its historic cities to its rugged mountains, the country is just, in a word, gorgeous!'
              label='Canada'
              path='/reviews'
            />
            <CardItem
              src='/images/NewYork.jpg'
              text="It’s got everything you could want at any time of day. Colossal buildings, locals with lots of personality and world-class dining and entertainment"
              label='New York'
              path='/reviews'
            />
            <CardItem
              src='/images/Mexico.jpg'
              text='A land of beautiful contrasts, culture, cenotes, chocolate, chili, and a whole lot more'
              label='Mexico'
              path='/reviews'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Hawaii.jpg'
              text='The loveliest fleet of islands that lies anchored in any ocean'
              label='Hawaii'
              path='/reviews'
            />
            <CardItem
              src='/images/Alaska.jpg'
              text="This place, the land is more ancient and pure; it's like a concentrated tonic for the soul"
              label='Alaska'
              path='/reviews'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NorthAmericaCards;