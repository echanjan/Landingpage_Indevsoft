import React from "react";
import './Footer.css';
import recurso2 from '../assets/recurso2.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="background-footer" style={{ backgroundImage: `url(${recurso2})` }}>
                <p style={{ marginBottom: '20px' }}>© 2024 IndevSoft</p>
            </div>
        </footer>
    )
}

export default Footer;