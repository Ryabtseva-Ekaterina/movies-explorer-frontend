import React, { useEffect} from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies ({movieCards, onDeleteMovie, searchMovie, onShort, isShort, getSavedMovies, loggedIn, searchedMovie, isSearched}) {

    let isSearch = isSearched;

    useEffect(() => {
        if (loggedIn) {
            getSavedMovies()
        }
    }, [loggedIn])

    return (
        <section>

            <SearchForm searchMovie = {searchMovie} 
                        movies = {movieCards}
                        onShort = {onShort}
                        isShort = {isShort}/>

            {(!isSearch) ? (<MoviesCardList  movieCards = {movieCards} onDeleteMovie={onDeleteMovie}/>) 
                       :  (<MoviesCardList  movieCards = {searchedMovie} onDeleteMovie={onDeleteMovie}/>) }

        </section>
    );
}

export default SavedMovies;