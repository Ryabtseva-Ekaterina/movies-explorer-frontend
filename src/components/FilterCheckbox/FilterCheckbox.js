import React, { useEffect } from 'react';
import './FilterCheckBox.css';

function FilterCheckBox ({onShort, movies, searchMovie, isShort}) {

    function handleChangeTumbler() {
        onShort (!isShort)
        localStorage.setItem('isShort', isShort);
    }

    useEffect(() => {
        if(localStorage.getItem('text')) {
            const text = localStorage.getItem('text');
            searchMovie(text, movies)
        };  
    }, [isShort])

    return(
        <section className='filterCheckBox'>
            <form className='filterCheckBox__form'>
                    <input type="checkbox"  
                        id='checkBox' 
                        className='filterCheckBox__input'  
                        checked={isShort}  
                        onChange = {() => handleChangeTumbler()}/>
            </form>
            <p className='filterCheckBox__description'>Короткометражки</p>
        </section>
    )
}

export default FilterCheckBox;