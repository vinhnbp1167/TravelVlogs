import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

const ListItem = ({
  item: { coverSrc, title, price, author, country, rating },
}) => (
  <li className='listItem-wrap'>
    <Link className='cards__item__link' to='/review-test'>
      <figure className='cards__list__item__pic-wrap' data-category={country}>
        <img className='cards__list__item__img' src={coverSrc} alt='' />
      </figure>
      <div className='cards__item__info'>
        <header>
          <h4>{title}</h4>
          <span>🌟{rating}</span>
        </header>
        <footer>
          <p>
            <b>Reviewed By: </b> <span>{author}</span>
          </p>
          <p>
            <b>Total cost: ${price}</b>
          </p>
        </footer>
      </div>
        
    </Link>
    
    
  </li>
);

export default ListItem;