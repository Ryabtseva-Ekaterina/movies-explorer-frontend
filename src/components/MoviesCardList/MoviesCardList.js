import React, {useEffect, useState} from 'react';
import './MovieCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList ({movieCards, className, isLoad, isSavedMovie, onDeleteMovie, handleAction}) {

    const [moviesOnDisplay, setMoviesOnDisplay] = useState(0);

    const display = window.innerWidth;

    function loadMovieCards () {

        if (display > 900) {
            setMoviesOnDisplay(12);
        } else if (display > 750) {
            setMoviesOnDisplay(8);
        } else if (display < 750) {
            setMoviesOnDisplay(5);
        }
    }
    useEffect (() => {
        loadMovieCards()
    }, [])

    window.resize = function () {
        setTimeout(() => {
            loadMovieCards()
        }, 500 )
    }

    function loadMoreMoviesCards () {
        if (display > 900) {
            setMoviesOnDisplay (moviesOnDisplay + 4)
        } else if (display > 750) {
            setMoviesOnDisplay (moviesOnDisplay + 2)
        } else if (display < 750) {
            setMoviesOnDisplay (moviesOnDisplay + 2)
        }
    }

    return (
        <section className={'movieCardList' + (isLoad?' movieCardList_notvisible': '')}>
            <ul className='movieCardList__elements'>

                {movieCards.slice(0, moviesOnDisplay).map((movie) => (
                    <MoviesCard 
                        key = {movie.movieId || movie.id}
                        id={movie.id}
                        movieId = {movie.movieId}
                        country = {movie.country}
                        image = {movie.image}
                        description = {movie.description}
                        duration = {movie.duration}
                        nameRU = {movie.nameRU}
                        className = {className}
                        trailerLink = {movie.trailerLink}
                        thumbnail = {movie.thumbnail}
                        movie={movie}
                        isSavedMovie={isSavedMovie}
                        onDeleteMovie={onDeleteMovie}
                        handleAction= {handleAction}>
                      </MoviesCard>
                ))} 

            </ul>

            { (movieCards.length >= moviesOnDisplay || movieCards.length <! 3) ? (
                <section className='movies__moreMovies'>
                    <button className='movies__moreMovies-button' type='button' onClick={() => loadMoreMoviesCards()}> Ещё </button>
                </section>
            ) : null}          
        
        </section>
    );
}

export default MoviesCardList;