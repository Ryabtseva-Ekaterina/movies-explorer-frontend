import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies ({movieCards, onDeleteMovie, searchMovie, onFilterShortMovie, movies, onShort, isShort}) {

    return (
        <section>

            <SearchForm searchMovie = {searchMovie} 
                        movies = {movieCards}
                        onShort = {onShort}
                        isShort = {isShort}/>

            <MoviesCardList  movieCards = {movieCards}
                             onDeleteMovie={onDeleteMovie}/>


        </section>
    );
}

export default SavedMovies;