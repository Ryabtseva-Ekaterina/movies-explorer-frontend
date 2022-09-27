import React from 'react';
import {Link} from 'react-router-dom';
import Form from '../Form/Form.js'
import logo from '../../images/logo.svg';
import './Login.css';

function Login () {
    return (
        <section className='login'>
            <Link to='/'>
                <img  className="header__logo" src={logo} alt="лого"/>
            </Link>

            <h1 className='login__title'>Рады видеть!</h1>

            <Form>
        
                <label className = 'form__label' for='email'> E-mail </label>
                <input className='form__input' type='email' required name = 'email' id='email'/>
                <span class='form__input-error-text'>Что-то пошло не так...</span>
                

                <label className = 'form__label' for='password'> Пароль </label>
                <input className='form__input' type='password' required name = 'password' id='password'/>
                <span class='form__input-error-text'>Что-то пошло не так...</span>
                
                <button className='form__button form__button-login'>Войти</button>
            </Form>

            <p className="login__text">Ещё не зарегистрированы? 
                <Link to='signup' className="login__link">Регистрация</Link>
            </p>
        </section>
    )
}

export default Login;