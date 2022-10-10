import React from 'react';
import { useForm } from 'react-hook-form';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm ({searchMovie, movies, onShort, isShort, movieCards}) {
    
    const { register, formState: {errors}, handleSubmit} = useForm({
        mode: 'onChange'});
    
    function onSubmit (data) {
        searchMovie(data.text, movies)
        localStorage.setItem('text', data.text)
    }
    
    return(
        <section className='searchForm'>
            <form className='searchForm__Form' onSubmit = {handleSubmit(onSubmit)} noValidate>
                <input
                    className='searchForm__input' 
                    type='text' 
                    name='search' 
                    {...register('text', {required: 'Нужно ввести ключевое слово', value: localStorage.getItem('text')})}
                    placeholder='Фильм'></input>
                <button className='searchForm__button' type='submit'></button>
                <span className='searchForm__input-error-text'>{errors.text?.message}</span>
            </form>

            <FilterCheckBox onShort={onShort} searchMovie= {searchMovie} movies = {movies} isShort={isShort} movieCards = {movieCards}/>
        </section>
    )
}

export default SearchForm;