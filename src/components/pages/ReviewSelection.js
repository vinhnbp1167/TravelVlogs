import React, { useEffect, useState } from 'react'
import FilterPanel from './FilterPanel'
import ReviewList from './ReviewList'
import SearchBar from './SearchBar'
import './ReviewSelection.css'
import { dataList } from './Constant'
import EmptyView from './EmptyView'

const ReviewSelection = () => {
    const [click, setClick] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState([500, 9000]);
    const [ list, setList ] = useState(dataList);
    const [ inputSearch, setInputSearch ] = useState('');
    const [ resultFound, setResultFound ] = useState('');

    const [ continents, setContinents ] = useState([
        {
            id: 1, 
            checked:false, 
            label:'Africa',
        },
        {
            id: 2, 
            checked:false, 
            label:'Antarctica',
        },
        {
            id: 3, 
            checked:false, 
            label:'Asia',
        },
        {
            id: 4, 
            checked:false, 
            label:'Australia',
        },
        {
            id: 5, 
            checked:false, 
            label:'Europe',
        },
        {
            id: 6, 
            checked:false, 
            label:'North America',
        },
        {
            id: 7, 
            checked:false, 
            label:'South America', 
        },
        
    ])

    const handleSelectCategory = () =>
    setClick(false);

    const handleSelectRating = (event,value) =>
    setSelectedRating(value);

    const handleChangeChecked = id => {
        const continentsStateList = continents;
        const changeCheckedContinents = continentsStateList.map((item) => 
        item.id === id ? { ...item, checked: !item.checked } : item
        );

        setContinents(changeCheckedContinents);
    };

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
      };

    const applyFilters = () => {
        let updatedList = dataList;

        // Rating Filter
        if(selectedRating) {
            updatedList = updatedList.filter(item => parseInt(item.rating) === parseInt(selectedRating)
            );
        }

        // Continent Filter
        const continentChecked = continents
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());

        if (continentChecked.length) {
            updatedList = updatedList.filter((item) => 
            continentChecked.includes(item.continent)
            );
        }

        // Price Filter
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        updatedList = updatedList.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        );

        // Search Filter
        if (inputSearch) {
            updatedList = updatedList.filter(
                (item) => 
                item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== 
                -1 ||
                item.author.toLowerCase().search(inputSearch.toLowerCase().trim()) !== 
                -1
            );
        }

        setList(updatedList);

        !updatedList.length ? setResultFound(false):setResultFound(true);
    };

    useEffect(() => {
        applyFilters();
    }, [selectedRating, continents, selectedPrice, inputSearch]);

  return (
    <div className='review-selection'>
        <SearchBar value={inputSearch} changeInput={e => setInputSearch(e.target.value)}/>

        <div className='review-selection_panelList-wrap'>
            <div className='review-selection_panel-wrap'>
                <FilterPanel 
                selectToggle={handleSelectCategory} 
                selectedCategory={selectedCategory}
                selectRating={handleSelectRating}
                selectedRating={selectedRating}
                selectedPrice={selectedPrice}
                continents = {continents}
                changeChecked={handleChangeChecked}
                changedPrice={handleChangePrice}
                />
            </div>
            
            <div className='review-selection_list-wrap'>
                {resultFound ? <ReviewList list={list} />:<EmptyView/> }
            </div>
        </div>
    </div>
  );
};

export default ReviewSelection
