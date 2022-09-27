import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';
import './Main.css';



function Main () {
    const history = useHistory();

    return (
        <main>
            <Header className =" header header-main">
                <div className = "header__sign">
                    <Link to='/signup' className='header__sign-link'>Регистрация</Link>
                    <button className="header__sign-button" onClick= {() => history.push('./signin')}>Войти</button>
                </div>
            </Header>

            <Promo/>

            <NavTab />

            <AboutProject />

            <Techs />

            <AboutMe />
            
            <Portfolio />

            <Footer />
        </main>
    );
}

export default Main;