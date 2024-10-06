import React from "react";
import './Body.css';
import './Header.css';
import whatsappIcon from '../assets/whatsapp-button.png';

function Body({ onContactClick }) {
    const handleClick = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace
        onContactClick(); // Llama a la función que muestra el formulario
    };

    return (
        <section id="services" className="services">
            <h2 style={{ marginBottom: '50px' }}>Servicios</h2>
            <div className="container-card">
                <div className="card software">
                    <div className="icon-placeholder" style={{ background: 'var(--color-software)' }}>
                        <span className="material-symbols-rounded" style={{ color: 'var(--color-software-ic)' }}>
                            developer_mode_tv
                        </span>
                    </div>
                    <h3>Desarrollo de software</h3>
                    <p>
                        Creamos soluciones de software a la medida de tus necesidades, desde sistemas empresariales hasta aplicaciones personalizadas. ¡Tu idea, nuestro código!
                    </p>
                </div>
                <div className="card web">
                    <div className="icon-placeholder" style={{ background: 'var(--color-web)' }}>
                        <span class="material-symbols-rounded" style={{ color: 'var(--color-web-ic)' }}>
                            devices
                        </span>
                    </div>
                    <h3>Diseño web</h3>
                    <p>
                        Diseñamos páginas web modernas, atractivas y fáciles de usar. No solo se verán increíbles, también estarán optimizadas para una experiencia perfecta en cualquier dispositivo.
                    </p>
                </div>
                <div className="card movil">
                    <div className="icon-placeholder" style={{ background: 'var(--color-movil)' }}>
                        <span class="material-symbols-rounded" style={{ color: 'var(--color-movil-ic)' }}>
                            developer_mode
                        </span>
                    </div>
                    <h3>Desarrollo móvil</h3>
                    <p>
                        Llevamos tu negocio al bolsillo de tus clientes con apps móviles que combinan funcionalidad y diseño. Android, iOS... ¡Tú decides!
                    </p>
                </div>
                <div className="card ciberseguridad">
                    <div className="icon-placeholder" style={{ background: 'var(--color-ciberseguridad)' }}>
                        <span class="material-symbols-rounded" style={{ color: 'var(---color-ciberseguridad-ic)' }}>
                            verified_user
                        </span>
                    </div>
                    <h3>Ciberseguridad</h3>
                    <p>
                        Protegemos tus datos y sistemas con lo último en ciberseguridad. Porque en el mundo digital, la seguridad nunca es opcional.
                    </p>
                </div>
                <div className="card infraestructura">
                    <div className="icon-placeholder" style={{ background: 'var(--color-infraestructura)' }}>
                        <span class="material-symbols-rounded" style={{ color: 'var(--color-infraestructura-ic)' }}>
                            home
                        </span>
                    </div>
                    <h3>Infraestructura</h3>
                    <p>
                        Construimos una base tecnológica sólida para tu empresa, asegurando que todo funcione sin interrupciones, desde servidores hasta redes.
                    </p>
                </div>
                <div className="card cloud">
                    <div className="icon-placeholder" style={{ background: 'var(--color-cloud)' }}>
                        <span class="material-symbols-rounded" style={{ color: 'var(--color-cloud-ic)' }}>
                            cloud
                        </span>
                    </div>
                    <h3>Cloud</h3>
                    <p>
                        Lleva tu negocio a la nube y aprovecha sus beneficios: flexibilidad, ahorro y escalabilidad. Nosotros te ayudamos a dar ese salto.
                    </p>
                </div>
            </div>
            <div className="promotion">
                <h2>¿Listo para transformar tus ideas?</h2>
                <div className="contact" onClick={handleClick} style={{ margin: 'auto', width: '150px', height: '45px', marginTop: '60px' }} >
                    <h4 style={{ fontSize: '16px' }}>Comenzar</h4>
                </div>
            </div>
            <div className="whatapp-ic">
                <a href="https://wa.me/+51924914258" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappIcon} style={{ width: '54px' }}></img>
                </a>
            </div>
        </section>
    );
}

export default Body;