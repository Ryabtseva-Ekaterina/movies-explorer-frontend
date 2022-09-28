import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header (props) {

    return (
        <header className={props.className}>
            <Link to='/'>
                <img  className="header__logo" src={logo} alt="лого"/>
            </Link>
            
            {props.children}
        </header>             
    );
}

export default Header;