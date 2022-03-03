import React from 'react'
import FilterListToggle from './FilterListToggle'
import { ratingList } from './Constant'
import './FilterPanel.css'
import CheckboxProton from './CheckboxProton'
import SliderProton from './SliderProton'
import { makeStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      width: '100%',
      justifyContent: 'space-between',
    },
    toggle: {
      fontFamily: `'Raleway', sans-serif`,
      fontSize: '.8rem',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius: '10px',
      '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
        borderRadius: '10px',
      },
      '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
        borderRadius: '10px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
      },
      '&.Mui-selected': {
        borderRadius: '10px',
        background: '#000',
        color: '#fff',
      },
      '&.MuiToggleButton-root': {
        '&:hover': {
          background: '#000',
          color: '#fff',
        },
      },
    },
  });

const FilterPanel = ({ 
    selectedCategory, 
    selectToggle,
    selectedRating,
    selectRating,
    selectedPrice,
    continents,
    changeChecked,
    changedPrice,
}) => {
const classes = useStyles();
  return (
      
    <div>
      <div className='input-group'>
        <Link to='/upload'>
          <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              onChange={selectToggle}
              className={classes.root}
              >
                  <ToggleButton className={classes.toggle}>
                  ➕ Write a Review
                  </ToggleButton>
          </ToggleButtonGroup>
        </Link>
          
      </div>

      {/* Locations */}
      <div className='input-group'>
        <p className='label'>Continents</p>
        {continents.map((continent) => (
        <CheckboxProton
          key={continent.id}
          continent={continent}
          changeChecked={changeChecked}
        />
      ))}
      </div>

        {/* Price Range */}
        <div className='input-group'>
            <p className='label-range'>Price Range</p>
            <SliderProton value={selectedPrice} changedPrice={changedPrice} />
        </div>

      {/* Star Rating */}
      <div className='input-group'>
            <p className='label'>Rating</p>
            <FilterListToggle 
            options={ratingList} 
            value={selectedRating} 
            selectToggle={selectRating} />
      </div>
    </div>
  )
}

export default FilterPanel