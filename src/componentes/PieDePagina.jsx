// src/componentes/PieDePagina.jsx
import React from "react";
import "./PieDePagina.css";
import WhatsAppLogo from "../assets/WhastappLogo.png";
import LinkedInLogo from "../assets/LinkedinLogo.png";
import InstagramLogo from "../assets/InstagramLogo.png";

function PieDePagina() {
  return (
    <footer className="pie-de-pagina">
      <div className="contenido-footer">
        {/* Sección de contacto */}
        <div className="seccion-contacto">
          <h3>Contacto</h3>
          <p>azingeneriadecolombia@gmail.com</p>
          <p>contabilidad.azingenieria@gmail.com</p>
          <p>+57 311 5972899</p>
          <p>Calle 14 #17-04 (Piso 3)</p>
        </div>

        {/* Sección de enlaces rápidos */}
        <div className="seccion-enlaces">
          <h3>Contacto y Empresa</h3>
          <ul>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
            <li>
              <a href="/empresa">Empresa</a>
            </li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="seccion-redes">
          <h3>Redes sociales</h3>
          <div className="iconos-redes">
            {/* WhatsApp */}
            <a
              href="https://wa.me/573115972899"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WhatsAppLogo} alt="WhatsApp" className="icono-red" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInLogo} alt="LinkedIn" className="icono-red" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramLogo} alt="Instagram" className="icono-red" />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados y créditos */}
      <div className="derechos-reservados">
        <p>
          © {new Date().getFullYear()} AZ Ingeniería de Colombia S.A.S - Todos los derechos reservados.
        </p>
        <div className="credito-desarrollador-pill">
          <span className="credito-texto-base">Desarrollado por</span>
          <a href="https://conechta-2fed1.firebaseapp.com" target="_blank" rel="noopener noreferrer" className="credito-enlace">
            Conechta
          </a>
          <span className="credito-separador">•</span>
          <span className="credito-texto-final">Soluciones Inteligentes ⚡</span>
        </div>
      </div>
    </footer>
  );
}

export default PieDePagina;
