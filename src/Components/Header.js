import React from "react";
import './Header.css';
import recurso1 from '../assets/recurso1.png';

function Header({ onContactClick }) {
    const handleClick = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace
        onContactClick(); // Llama a la función que muestra el formulario
    };

    return (
        <header className="header">
            <div className="side-bar">
                <div className="logo">
                    <img src="/logo-Indevsoft.png" alt="Logo Indevsoft" height="30px"></img>
                </div>
                <nav className="list-options">
                    <ul>
                        {/* <li><a href="#us">Nosotros</a></li> */}
                        <li><a href="#services">Servicios</a></li>
                        {/* <li><a href="#platforms">Plataformas</a></li>
                        <li><a href="#portfolio">Portafolio</a></li> */}
                    </ul>
                </nav>
                <div className="contact" onClick={handleClick}>
                    {/* Asegúrate de que la función se esté llamando correctamente */}
                    <a>Contáctanos</a>
                </div>
            </div>
            <div className="background" style={{ backgroundImage: `url(${recurso1})` }}>
            </div>
        </header>
    );
}

export default Header;
