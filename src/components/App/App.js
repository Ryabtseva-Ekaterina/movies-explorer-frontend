import React, {useState} from "react";
import {Route, Switch, Link, useHistory} from 'react-router-dom';
import './App.css';

import NotFound from '../NotFound/NotFound.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App ( ) {

    const history = useHistory();

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    function onClose () {
        setIsNavigationOpen(false);
    }


    return (
        <div className="page">
            <div className="page__content">

                <Switch>
                    <Route exact={true} path = '/'>
                        <Header className =" header header-main">
                            <div className = "header__sign">
                                <Link to='/signup' className='header__sign-link'>Регистрация</Link>
                                <button className="header__sign-button" onClick= {() => history.push('./signin')} type='button'>Войти</button>
                            </div>
                        </Header>

                        <Main />
                        
                        <Footer />
                    </Route>

                    <Route  exact={true} path = '/movies'>
                        <Movies 
                        isOpen = {isNavigationOpen}
                        onClose = {onClose}
                        onNavigation = {setIsNavigationOpen}/>
                    </Route>

                    <Route exact={true} path = '/saved_movies'>
                        <SavedMovies 
                         isOpen = {isNavigationOpen}
                         onClose = {onClose}
                         onNavigation = {setIsNavigationOpen}/>
                    </Route>

                    <Route exact={true} path = '/profile'>
                        <Profile />
                    </Route>

                    <Route path = '/signup'>
                        <Register />
                    </Route>

                    <Route path = '/signin'>
                        <Login />
                    </Route>

                    <Route exact={true} path = '*'>
                        <NotFound />
                    </Route>
                </Switch>

            </div>
        </div>
    )
}

export default App;