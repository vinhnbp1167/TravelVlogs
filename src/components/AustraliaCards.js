import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function AustraliaCards() {
  return (
    <div className='cards'>
      <h1>Being lost in Australia gives you a lovely sense of security</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/NSW.jpg'
              text='Stay at Sydney Opera House while companied by a breathtaking view'
              label='New South Wales'
              path='/reviews'
            />
            <CardItem
              src='/images/Queensland.jpg'
              text="Can't leave Australia without seeing the Great Barrier Reef"
              label='Queensland'
              path='/reviews'
            />
            <CardItem
              src='/images/NorthernTerritory.jpg'
              text='Delve into monsoon rainforests, mangrove swamps, rivers, gorges, ancient rock paintings, wetlands, and waterfalls'
              label='Northern Territory'
              path='/reviews'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AustraliaCards;