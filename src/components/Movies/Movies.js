import React from 'react';
import './Movies.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation.js';

function Movies (props) {
    
    return (
        <section>
            <Header className='header'>
                <Navigation 
                isOpen = {props.isOpen}
                onClose = {props.onClose}/>
                <button className='header__profile-burger' onClick = {()=>props.onNavigation(true)}/>
            </Header>

            <SearchForm />

            <Preloader />

            <MoviesCardList className={'moviesCard__button'}/>

            <section className='movies__moreMovies'>
                <button className='movies__moreMovies-button'>Ещё</button>
            </section>

            <Footer />
        </section>
    );
}

export default Movies;