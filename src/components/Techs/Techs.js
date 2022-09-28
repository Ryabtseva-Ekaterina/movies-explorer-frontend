import React from 'react';
import './Techs.css';

function Techs () {
    return (
        <section className='techs' id='techs'>
            <h3 className='main__section-title main__section-title-techs'>Технологии</h3>
            <hr className="main__line main__line-techs"></hr>
            <h2 className='techs__title'>7 технологий</h2>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='techs__tabs'>
                <div className='techs__tab'>
                    <p className='techs__tab-text'>HTML</p>
                </div>

                <div className='techs__tab'>
                    <p className='techs__tab-text'>CSS</p>
                </div>

                <div className='techs__tab'>
                    <p className='techs__tab-text'>JS</p>
                </div>

                <div className='techs__tab'>
                    <p className='techs__tab-text'>React</p>
                </div>

                <div className='techs__tab'>
                    <p className='techs__tab-text'>Git</p>
                </div>

                <div className='techs__tab'>
                    <p className='techs__tab-text'>Express.js</p>
                </div>

                <div className='techs__tab'>
                    <p className='techs__tab-text'>mongoDB</p>
                </div>
            </div>
        </section>
    )
}

export default Techs;