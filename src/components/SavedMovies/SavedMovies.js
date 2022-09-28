import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies () {
    return (
        <section>

            <SearchForm />

            <MoviesCardList  className='moviesCard__deleteButton'/>

        </section>
    );
}

export default SavedMovies;