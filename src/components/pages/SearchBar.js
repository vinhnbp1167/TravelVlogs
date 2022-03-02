import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css';

const SearchBar = ({value, changeInput }) => 
    <div className='searchBar-wrap'>
        <SearchIcon className='searchBar-icon' />
        <input type='text' style={{fontSize:25}}  placeholder='Search...' value={value} onChange={changeInput} />
    </div>

export default SearchBar
