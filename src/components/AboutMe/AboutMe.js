import React from 'react';
import './AboutMe.css';
import foto from '../../images/foto.png';

function AboutMe () {
    return (
        <section className='aboutMe' id='aboutMe'>
            <h3 className='main__section-title'>Студент</h3>
            <hr className="main__line"></hr>

            <div className='aboutMe__content'>
                <div className='aboutMe__textContent'>
                    <h2 className='aboutMe__title'>Екатерина</h2>
                    <p className='aboutMe__description'>Фронтенд-разработчик, 34 года</p>

                    <p className='aboutMe__text'>Я живу в Крыму - г.Евпатория. Закончила Таврический гуманитарно-экологический
                    институт по специальности Политология. Немного работала по специальности, после чего более 5 лет проработала 
                    на почте(начальником почтового отделения, начальником участка производственного контроля). В 2016 году ушла 
                    в декретный отпуск и начала искать пути и способы самореализаци. В 2018г. прошла курсы по разработке сайтов 
                    в коснтрукторе Tilda, в 2019г. курс по веб-дизайну. С 2019г. в команде занимаемся разработкой сайтов на Tilda,
                    презентаций и т.д. Так как техническая часть интересна мне больше, чем разработка дизайна, решила не
                    останавливаться и пришла обучаться на фронтенд-разработчика в Я.Практикум. </p>
                    <a href="https://github.com/Ryabtseva-Ekaterina" target="_blank" className='aboutMe__link' rel="noreferrer">Github</a>
                </div>
                
                <img  className='aboutMe__foto' src={foto} alt="фото"/>
                
            </div>

        </section>
    )
}

export default AboutMe;