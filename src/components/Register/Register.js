import React from 'react';
import {Link} from 'react-router-dom';
import Form from '../Form/Form.js';
import logo from '../../images/logo.svg';
import './Register.css';

function Register () {
    return (
        <section className='register'>
            <Link to='/'>
                <img  className="header__logo" src={logo} alt="лого"/>
            </Link>

            <h1 className='register__title'>Добро пожаловать!</h1>

            <Form>
                <label className = 'form__label' for='name'> Имя </label>
                <input className='form__input' type='text' required name = 'name' id='name' minLength='2' maxLength='30'/>
                <span class='form__input-error-text'>Что-то пошло не так...</span>

                <label className = 'form__label' for='email'> E-mail </label>
                <input className='form__input' type='email' required name = 'email' id='email'/>
                <span class='form__input-error-text'>Что-то пошло не так...</span>
                

                <label className = 'form__label' for='password'> Пароль </label>
                <input className='form__input' type='password' required name = 'password' id='password'/>
                <span class='form__input-error-text'>Что-то пошло не так...</span>
                
                <button className='form__button' type='submit'>Зарегистрироваться</button>
            </Form>

            <p className="register__text">Уже зарегистрированы? 
                <Link to='signin' className="register__link"> Войти</Link>
            </p>
        </section>
    )
}

export default Register;