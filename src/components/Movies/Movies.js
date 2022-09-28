import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
;

function Movies () {
    
    return (
        <section>
           
            <SearchForm />

            <Preloader />

            <MoviesCardList className={'moviesCard__button'}/>

            <section className='movies__moreMovies'>
                <button className='movies__moreMovies-button' type='button'>Ещё</button>
            </section>

        </section>
    );
}

export default Movies;