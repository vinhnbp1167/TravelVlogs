import React from 'react';
import { ReviewTestItems } from './ReviewTestItems';
import './ReviewTest.css';

export default function ReviewTest() {
    return (
      <>
        <ul>
          {ReviewTestItems.map((item, index) => {
            return (
                <li key={index}>
                    <div className='section'>
                        <h1>{item.title}</h1>
                        <img class='photo' alt='Travel Image' src={item.image}></img>
                        
                        <p>{item.comment}</p>
                        </div>
                </li>
            );
          })}
        </ul>
      </>
    );
}