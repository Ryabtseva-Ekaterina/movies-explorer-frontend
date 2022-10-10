import React, {useContext, useState} from 'react';
import { useForm} from 'react-hook-form';
import './Profile.css';
import {CurrentUserContext} from '../../context/CurrentUserContext.js';

function Profile (props) {
    
    const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: 'onChange'});

    const user = useContext(CurrentUserContext);
    
    function submit (data) {
        props.onUpdateUser ({
            name: data.name,
            email: data.email,
        });
    }

    return (
        <section className="profile">
            
            <div className='profile__content'>
                <h1 className='profile__title'> Привет, {user.name}</h1>

                <form className='profile__edit-form' onSubmit = {handleSubmit(submit)}>

                    <label className='profile__edit-form-label' htmlFor='name'>Имя</label> 
                    <input className='profile__edit-form-input' 
                        name='name' 
                        type='text' 
                        id='name' 
                        {...register('name', {required: true, 
                            minLength: 2, 
                            maxLength: 30, 
                            value: user.name,
                            pattern: /[a-zа-яё ]/i})}
                        />
                    <span className='profile__edit-form-input-text'>
                        {errors.name?.type === "required" && "Пожалуйста, заполните поле"} 
                        {errors.name?.type === "pattern" && "Поле содержит недопустимые символы"}
                        {errors.name?.type === "minLength" && "Минимальное  значение должно быть не меньше 2-х символов"}
                        {errors.name?.type === "maxLength" && "Достигнута максимальная длина поля"}
                    </span>                   
                    
                    <hr className='profile__info-line'/>

                    <label className='profile__edit-form-label' htmlFor='email'>E-mail</label> 
                    <input className='profile__edit-form-input' 
                        name='email' 
                        type='email' 
                        id='email'  
                        {...register('email', {required: true,
                            value: user.email,
                            pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/})}/>
                    <span className='profile__edit-form-input-text'>
                        {errors.email?.type === "required" && "Пожалуйста, заполните поле"} 
                        {errors.email?.type === "pattern" && "Поле содержит недопустимые символы"}
                    </span> 
                    
                    <p className = 'profile__massage'> {props.message}</p>

                    <button disabled={!isValid} className={'profile__edit-form-button' +  (!isValid?' form__button_disabled':'')} type='submit'>Редактировать</button>

                </form>

                <button className='profile__exit-button' type='button' onClick={() => props.onLogAut()}>Выйти из аккаунта</button>
            </div>
        </section>     
    );
}

export default Profile;