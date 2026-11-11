import React, { useState } from 'react';
import './PQRS.css';

export default function PQRS() {
  const [open, setOpen] = useState(false);
  const [tipoAccion, setTipoAccion] = useState('');
  const [servicio, setServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [punto, setPunto] = useState('');
  const [presentadaPor, setPresentadaPor] = useState('');
  const [cliente, setCliente] = useState('');
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const tipos = ['Solicitud', 'Queja', 'Reclamo', 'Sugerencia', 'Recomendación'];

  const toggleForm = () => {
    setOpen(!open);
    setMessage('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setMessage('');

    const data = {
      Fecha: fecha,
      'Punto operativo': punto,
      'Presentada por': presentadaPor,
      Cliente: cliente,
      'Tipo de acción': tipoAccion,
      Servicio: servicio,
      'Descripción PQRS': descripcion,
      'Queja recibida por': '[interno]',
      'Informar a': '[interno]',
    };

    try {
      // Correo oficial de AZ Ingeniería para recepción de PQRS:
      const formEndpoint = 'https://formsubmit.co/ajax/azingenieriadecolombia@gmail.com';

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _subject: 'Nuevo PQRS' })
      });

      if (response.ok) {
        setMessage('PQRS enviada correctamente.');
        setFecha(''); setPunto(''); setPresentadaPor('');
        setCliente(''); setTipoAccion(''); setServicio(''); setDescripcion('');
      } else {
        setMessage('Hubo un error enviando el formulario.');
      }
    } catch {
      setMessage('Error de red, inténtalo de nuevo.');
    }

    setSending(false);
  };

  return (
    <>
      {/* Botón flotante: solo se muestra si el modal NO está abierto */}
      {!open && (
        <div className="pqrs-container">
          <button className="pqrs-button" onClick={toggleForm}>PQRS</button>
          <div className="pqrs-tooltip">Haz tu petición, queja o reclamo</div>
        </div>
      )}

      {open && (
        <div className="pqrs-overlay" onClick={toggleForm}>
          <div className="pqrs-modal" onClick={e => e.stopPropagation()}>
            <button className="pqrs-close" onClick={toggleForm}>&times;</button>
            <h2>Atención PQRS</h2>
            <form className="pqrs-form" onSubmit={handleSubmit}>
              {/* Información General */}
              <fieldset className="seccion">
                <legend>1. Información General</legend>
                <div className="fila">
                  <label>
                    Fecha:
                    <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} required />
                  </label>
                  <label>
                    Punto operativo:
                    <input type="text" value={punto} onChange={e => setPunto(e.target.value)} placeholder="Ej. Bogotá" required />
                  </label>
                </div>
                <div className="fila">
                  <label>
                    Presentada por:
                    <input type="text" value={presentadaPor} onChange={e => setPresentadaPor(e.target.value)} placeholder="Nombre completo" required />
                  </label>
                  <label>
                    Cliente:
                    <input type="text" value={cliente} onChange={e => setCliente(e.target.value)} placeholder="Nombre del cliente" required />
                  </label>
                </div>
              </fieldset>

              {/* Tipo de Acción */}
              <fieldset className="seccion">
                <legend>2. Tipo de Acción</legend>
                <div className="tipos-container">
                  {tipos.map(t => (
                    <button
                      key={t}
                      type="button"
                      className={`tipo-btn ${tipoAccion===t?'selected':''}`}
                      onClick={()=>setTipoAccion(t)}
                    >{t}</button>
                  ))}
                </div>
              </fieldset>

              {/* Servicio */}
              <fieldset className="seccion">
                <legend>3. Servicio</legend>
                <textarea
                  className="servicio-input"
                  value={servicio}
                  onChange={e=>setServicio(e.target.value)}
                  maxLength={200}
                  placeholder="Máx. 200 caracteres"
                  required
                />
                <div className="char-count">{servicio.length} / 200</div>
              </fieldset>

              {/* Descripción PQRS */}
              <fieldset className="seccion">
                <legend>4. Descripción de la PQRS</legend>
                <textarea
                  className="descripcion-input"
                  value={descripcion}
                  onChange={e=>setDescripcion(e.target.value)}
                  placeholder="Describe tu petición, queja o reclamo..."
                  required
                />
              </fieldset>

              <button type="submit" className="pqrs-submit" disabled={sending}>
                {sending ? 'Enviando...' : 'Enviar PQRS'}
              </button>
              {message && <p className="pqrs-message">{message}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
