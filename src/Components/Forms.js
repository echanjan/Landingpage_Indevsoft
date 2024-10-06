import React from "react";
import './Forms.css'

function Form({ onClose }) { // Recibe la prop `onClose` para cerrar el formulario

    return (
        <section className="contact-form">
            <div className="overlay">
                <span id="buttonClose" onClick={onClose} className="material-symbols-rounded">
                    close
                </span>
            </div>
            <div className="box-form">
                <h1 style={{ marginBottom: '30px' }}>Datos personales</h1>
                <form>
                    <input placeholder="Nombre" type="text" name="Nombre" required />
                    <input placeholder="Empresa" type="text" name="Empresa" required />
                    <input placeholder="Número" type="number" name="Número" required />
                    <input placeholder="Correo" type="email" name="Correo" required />
                    <select>
                        <option value="" selected disabled >Selecciona servicio</option>
                        <option value="desarrolloSoftware">Desarrollo de software</option>
                        <option value="diseñoWeb">Diseño web</option>
                        <option value="desarrolloMovil">Desarrollo movil</option>
                        <option value="ciberseguridad">Ciberseguridad</option>
                        <option value="infraestructura">Infraestructura</option>
                        <option value="cloud">Cloud</option>
                    </select>
                    <textarea placeholder="Escribe aquí tu idea" rows="4" cols="50" name="Mensaje"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Form;
