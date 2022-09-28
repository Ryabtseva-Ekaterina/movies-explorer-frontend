import React from 'react';
import {Link} from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header.js';
import Navigation from '../Navigation/Navigation.js';

function Profile (props) {
    return (
        <section className="profile">

            <Header className='header'>
                <Navigation>
                    <Link to='/movies' className='navigation__link'>Фильмы</Link>
                    <Link to='saved_movies' className='navigation__link'>Сохраненные фильмы</Link>
                </Navigation>

                <button className='header__profile-burger'/>
            </Header>

            <div className='profile__content'>
                <h1 className='profile__title'> Привет, {props.name}</h1>

                <form className='profile__edit-form'>

                    <label className='profile__edit-form-label' for='name'>Имя</label> 
                    <input className='profile__edit-form-input' name='name' type='text' id='name' required value={props.name || ''} />
                    <span class='profile__edit-form-input-text'>Что-то пошло не так...</span>                   
                    
                    <hr className='profile__info-line'/>

                    <label className='profile__edit-form-label' for='email'>E-mail</label> 
                    <input className='profile__edit-form-input' name='email' type='email' id='email' required value={props.email || ''} />
                    <span class='profile__edit-form-input-text'>Что-то пошло не так...</span> 
                    
                    <button className='profile__edit-form-button' type='submit'>Редактировать</button>

                </form>

                <button className='profile__exit-button' type='submit'>Выйти из аккаунта</button>
            </div>
        </section>     
    );
}

export default Profile;