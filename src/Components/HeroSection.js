import React from "react";
import './HeroSection.css'; // Importamos el archivo CSS
import cohete from '../assets/cohete.png'; // Importamos la imagen

function HeroSection() {
    return (
        <section className="hero">
            <div className="ellipse"></div> {/* La elipse con la animación */}
            <div className="hero-content">
                <h2>Impulsa tu transformación digital <br></br> con soluciones a medida</h2>
                <img className="cohete" src={cohete}></img>
            </div>
        </section>
    );
}

export default HeroSection;
