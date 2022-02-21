import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function SouthAmericaCards() {
  return (
    <div className='cards'>
      <h1>When you travel, remember that a foreign country is not designed to make you comfortable</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://vinhnbp1167.github.io/TravelVlogs/images/Peru.jpg'
              text='Put down that map and get wonderfully lost'
              label='Peru'
              path='/reviews'
            />
            <CardItem
              src='https://vinhnbp1167.github.io/TravelVlogs/images/Brazil.jpg'
              text="Explore Brazil's gorgeous natural landscape"
              label='Brazil'
              path='/reviews'
            />
            <CardItem
              src='https://vinhnbp1167.github.io/TravelVlogs/images/CostaRica.jpg'
              text='The tropical country features volcanoes to hike and lush rainforests to traverse on foot or by zip line'
              label='Costa Rica'
              path='/reviews'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SouthAmericaCards;