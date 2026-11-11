import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [mostrarCaptchaModal, setMostrarCaptchaModal] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(Date.now());

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.grecaptcha.ready(() => {
        setRecaptchaReady(true);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
    setRecaptchaError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setMostrarCaptchaModal(true);
      return;
    }

    setEnviando(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/azingenieriadecolombia@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...formData, 
          "g-recaptcha-response": captchaToken 
        }),
      });

      if (response.ok) {
        setEnviado(true);
        setFormData({ nombre: "", correo: "", mensaje: "" });
      }
    } catch (error) {
      alert("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setEnviando(false);
      setCaptchaKey(Date.now());
      setCaptchaToken(null);
    }
  };

  const cerrarModal = () => {
    setEnviado(false);
  };

  return (
    <main className="contacto-contenedor">
      <div className="contacto-grid">
        <form onSubmit={handleSubmit} className="formulario-contacto">
          <h2>Envíanos un mensaje</h2>
          
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <div className="captcha-container">
            {recaptchaError ? (
              <div className="recaptcha-error">
                Error al cargar reCAPTCHA. Recarga la página.
              </div>
            ) : (
              recaptchaReady && (
                <ReCAPTCHA
                  key={captchaKey}
                  sitekey='6Lc5IlcrAAAAABKcQz6E2aUZ5DhFyR84DTb47M5Z'
                  onChange={handleCaptcha}
                  onErrored={() => setRecaptchaError(true)}
                />
              )
            )}
          </div>

          <button 
            type="submit" 
            className="boton-enviar"
            disabled={enviando || recaptchaError}
          >
            {enviando ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        <div className="mapa-container">
          <h2>Visítanos</h2>
          <iframe
            title="Ubicación oficinas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.863937595462!2d-72.3957406857345!3d5.337592096157887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b1f2e57a83295%3A0x1b5b7b2e5d5b5b1a!2sCalle%2014%20%2317-04%2C%20Yopal%2C%20Casanare%2C%20Colombia!5e0!3m2!1ses!2sco!4v1629999999999!5m2!1ses!2sco"
            allowFullScreen
            loading="lazy"
          />
          <p className="mapa-direccion">Estamos ubicados en el 3 piso del edificio</p>
        </div>
      </div>

      <div className="whatsapp-container">
        <a
          href="https://wa.me/573107695570"
          className="boton-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#25D366"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-32 0-63.1-8.5-90.6-24.6l-6.5-3.9-67.4 17.7 18-65.6-4.2-6.7c-17.6-28-27-60.1-27-93.1 0-96.3 78.8-175.1 175.2-175.1 46.8 0 90.7 18.2 123.8 51.4 33.1 33.1 51.3 77.1 51.3 123.9 0 96.3-78.8 175.2-175.2 175.2zm96.6-131.7c-5.3-2.6-31.4-15.5-36.3-17.3-4.8-1.7-8.4-2.6-11.9 2.6-3.5 5.3-13.7 17.3-16.7 20.8-3.1 3.5-6.2 4-11.5 1.3-5.3-2.6-22.4-8.3-42.7-26.4-15.8-14.1-26.4-31.5-29.5-36.8-3.1-5.3-.3-8.2 2.4-10.8 2.4-2.4 5.3-6.2 8-9.3 2.6-3.1 3.5-5.3 5.3-8.8 1.8-3.5.9-6.6-.4-9.3-1.3-2.6-11.9-28.7-16.3-39.3-4.3-10.4-8.7-9-11.9-9.1-3.1-.1-6.6-.1-10.2-.1-3.5 0-9.3 1.3-14.1 6.6-4.8 5.3-18.5 18.1-18.5 44.1s19 51.1 21.6 54.6c2.6 3.5 37.2 56.8 90.1 79.6 12.6 5.4 22.4 8.7 30 11.1 12.7 4 24.3 3.5 33.4 2.1 10.3-1.6 31.4-12.8 35.8-25.2 4.4-12.4 4.4-23 3.1-25.2-1.3-2.3-4.9-3.6-10.2-6.2z"/>
          </svg>
          Contáctanos por WhatsApp
        </a>
      </div>

      {(mostrarCaptchaModal || enviando || enviado) && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            {mostrarCaptchaModal && (
              <>
                <p>Por favor, completa el reCAPTCHA para continuar.</p>
                <button 
                  onClick={() => setMostrarCaptchaModal(false)} 
                  className="boton-ok"
                >
                  OK
                </button>
              </>
            )}
            
            {enviando && (
              <div className="modal-enviando">
                <div className="spinner"></div>
                <p>Enviando mensaje...</p>
              </div>
            )}
            
            {enviado && (
              <div className="modal-enviado">
                <p>¡Mensaje enviado con éxito!</p>
                <button onClick={cerrarModal} className="boton-ok">
                  OK
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Contacto;