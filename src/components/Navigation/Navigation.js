import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import ButtonImage from '../../images/profile.svg';

function Navigation ({isOpen, onClose}) {
    return (
        <section className={'navigation' +  (isOpen?' navigation_visible':'')}>
            <div className="navigation__container">
                <nav className="navigation__links">
                    <Link to='/' className='navigation__link'>Главная</Link>
                    <Link to='/movies' className='navigation__link'>Фильмы</Link>
                    <Link to='saved_movies' className='navigation__link'>Сохраненные фильмы</Link>
                </nav>

                <Link className = 'navigation__button' to='/profile'>
                    <p className='navigation__button-text'>Аккаунт</p>
                    <div className='navigation__button-icon'>
                        <img className='navigation__button-image' src={ButtonImage} alt='Профиль' />
                    </div>
                </Link>
                <button className='navigation__closeButton' onClick={onClose} />
            </div>    
        </section>
    )
}

export default Navigation;