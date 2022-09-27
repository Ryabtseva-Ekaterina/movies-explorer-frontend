import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Navigation from '../Navigation/Navigation.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies (props) {
    return (
        <section>
            <Header className='header'>
                <Navigation
                isOpen = {props.isOpen}
                onClose = {props.onClose}/>
                    
                <button className='header__profile-burger' onClick = {()=>props.onNavigation(true)}/>
            </Header>

            <SearchForm />

            <MoviesCardList  className='moviesCard__deleteButton'/>

            <Footer />
        </section>
    );
}

export default SavedMovies;