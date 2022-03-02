import ListItem from './ListItem';
import React from 'react'
import './ReviewList.css'
const ReviewList = ({list}) => {
  return (
    <div className='list-wrap'>
        {list.map((item) => (
            <ListItem key={item.id} item={item}/>
        ))}
    </div>
)};

export default ReviewList
