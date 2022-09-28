import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className="footer__line"/>
            <div className="footer__copyright">
                <p className="footer__copyright-text">© 2022</p>
                <div className="footer__copyright-links">
                    <a className="footer__copyright-link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__copyright-link" href="https://github.com/Ryabtseva-Ekaterina" target="_blank" rel="noreferrer" >Github</a>
                </div>
            </div>
        </footer>     
    );
}

export default Footer;