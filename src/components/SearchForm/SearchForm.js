import React from 'react';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm () {
    return(
        <section className='searchForm'>
            <form className='searchForm__Form'>
                <input className='searchForm__input' type='text' name='search' placeholder='Фильм'></input>
                <button className='searchForm__button' type='submit'></button>
            </form>

            <FilterCheckBox />
        </section>
    )
}

export default SearchForm;