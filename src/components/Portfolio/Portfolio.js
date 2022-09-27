import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <nav>
                <ul className='porfolio__links'>
                    <a href='https://ryabtseva-ekaterina.github.io/how-to-learn/' target='blank' className='porfolio__nav-link'>
                        <li className = 'portfolio__link'>
                            <p className='portfolio__link-text'>Статичный сайт</p> 
                            <img className='portfolio__link-image' src={arrow} alt='стрелка'/>
                        </li>
                    </a>
                    

                    <hr className="potrfolio__line"/>

                    <a href='https://ryabtseva-ekaterina.github.io/russian-travel/index.html' target='blank' className='porfolio__nav-link'>
                        <li className = 'portfolio__link'>
                            <p className='portfolio__link-text'>Адаптивный сайт</p> 
                            <img className='portfolio__link-image' src={arrow} alt='стрелка'/>
                        </li>
                    </a>

                    <hr className="potrfolio__line"/>

                    <a href='http://mesto.ryabtseva.nomoredomains.sbs' target='blank' className='porfolio__nav-link'>
                        <li className = 'portfolio__link'>
                            <p className='portfolio__link-text'>Одностраничное приложение</p>
                            <img className='portfolio__link-image' src={arrow} alt='стрелка'/>
                        </li>
                    </a>
                </ul>
            </nav>

        </section>
    )
}

export default Portfolio;