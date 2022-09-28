import React from 'react';
import './MovieCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import movieImage from '../../images/movie1.jpg';

const movies = [
     {
       description: '33 слова о дизайне',
       image: movieImage,
       duration: '1ч42м'
     },
     {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
     },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      {
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },{
        description: '33 слова о дизайне',
        image: movieImage,
        duration: '1ч42м'
      },
      
  ];

function MoviesCardList (props) {

    return (
        <section className='movieCardList'>
            <ul className='movieCardList__elements'>

                {movies.map((movie) => (
                    <MoviesCard 
                        image = {movie.image}
                        description = {movie.description}
                        duration = {movie.duration}
                        className = {props.className}>
                      </MoviesCard>
                    
                ))}

            </ul>
        </section>
    );
}

export default MoviesCardList;