import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox () {
    return(
        <section className='filterCheckBox'>
            <form className='filterCheckBox__form'>
                    <input type="checkbox" className='filterCheckBox__input'/>
            </form>
            <p className='filterCheckBox__description'>Короткометражки</p>
        </section>
    )
}

export default FilterCheckBox;