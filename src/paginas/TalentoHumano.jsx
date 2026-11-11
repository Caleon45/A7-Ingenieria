import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./TalentoHumano.css";
import THPortada from "../assets/TH_portada.png";
import TH1 from "../assets/TH_1.jpg";
import TH_clientes from "../assets/TH_clientes.png";
import TH_proveedores from "../assets/TH_proveedores.png";


function ToggleCard({ title, image, description, examples }) {
  const [isOpen, setIsOpen] = useState(false);

  // Evitar scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const modalContent = (
    <div className="th-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="th-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="th-modal-header">
          <div className="th-modal-title-wrapper">
            <img src={image} alt={title} className="th-modal-icon" />
            <h3>Nuestros {title}</h3>
          </div>
          <button className="th-modal-close" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        <div className="th-modal-body">
          <p className="th-modal-desc">{description}</p>
          <ul className="th-modal-list">
            {examples.map((example, index) => (
              <li key={index}>
                <span className="th-modal-bullet">✓</span> {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => setIsOpen(true)}>Ver más</button>
        </div>
      </div>

      {isOpen && createPortal(modalContent, document.body)}
    </>
  );
}

function TalentoHumano() {
  const [view, setView] = useState("administrativa"); // "administrativa" o "operativa"
  const [animate, setAnimate] = useState(false);

  // Animación para la transición de vistas
  const toggleView = () => {
    setAnimate(true);
    setTimeout(() => {
      setView((prev) =>
        prev === "administrativa" ? "operativa" : "administrativa"
      );
      setAnimate(false);
    }, 300);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".anim-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Listas de empleados por área
  // Se cargan las imágenes desde la carpeta "plantel" ubicada en "assets"
  const empleadosAdministrativos = [
    {
      nombre: "Zandra Carreño",
      cargo: "Gerente",
      profesion: "Ingeniera Metalúrgica",
      foto: require("../assets/plantel/Zandra Carreño.png")
    },
    {
      nombre: "Camila Fernandez Muñoz",
      cargo: "Coordinadora HSE",
      profesion: "Profesional en Salud Ocupacional",
      foto: require("../assets/plantel/Karen Riaño.png")
    },
    {
      nombre: "Yohana Medina",
      cargo: "Gestión Humana",
      profesion: "Contadora Pública",
      foto: require("../assets/plantel/Yohana Medina.png")
    },
    {
      nombre: "Denny Alarcón",
      cargo: "Contador Junior",
      profesion: "Contadora Pública",
      foto: require("../assets/plantel/Denny Alarcón.jpeg")
    },
    
  ];

  const empleadosOperativos = [
    
    {
      nombre: "Jhon Walteros",
      cargo: "Auxiliar SG-SST",
      profesion: "Tecnólogo en Gestión de la Seguridad y Salud en el Trabajo",
      foto: require("../assets/plantel/Jhon Walteros.png")
    },
    {
      nombre: "Handerson Rodríguez",
      cargo: "Ing. Residente de Obra",
      profesion: "Ingeniero Civil",
      foto: require("../assets/plantel/Handerson Rodríguez.png")
    },
    {
      nombre: "Wilder Alarcón",
      cargo: "Ing. Residente de Obra",
      profesion: "Ingeniero Civil",
      foto: require("../assets/plantel/Wilder Alarcón.png")
    }
  ];

  const empleados =
    view === "administrativa" ? empleadosAdministrativos : empleadosOperativos;

  return (
    <div className="talento-humano">
      {/* ===============================
          1. PORTADA
          =============================== */}
      <section
        className="portada anim-section"
        style={{ backgroundImage: `url(${THPortada})` }}
      >
        <div className="portada-contenido">
          <h1>Talento Humano</h1>
        </div>
      </section>

      {/* ===============================
          2. ¿QUÉ HACEMOS?
          =============================== */}
      <section className="que-hacemos anim-section">
        <h2>¿Qué hacemos?</h2>
        <p>
          En nuestra empresa asumimos con responsabilidad y compromiso cada proyecto
          que emprendemos. Creemos en la perseverancia, la disciplina y el trabajo
          constante para alcanzar nuestras metas. Nuestro equipo está motivado y
          listo para afrontar nuevos desafíos, siempre con la visión de mejorar y
          crecer profesionalmente.
        </p>
        <div className="imagen-que-hacemos">
          <img src={TH1} alt="Imagen de todo el personal" />
        </div>
      </section>

      {/* ===============================
          3. ÉTICA ORGANIZACIONAL
          =============================== */}
      <section className="etica-organizacional anim-section">
        <h2>Ética Organizacional</h2>
        <div className="cards-container">
          <ToggleCard
            title="Proveedores"
            image={TH_proveedores}
            description="Mantenemos relaciones sólidas y transparentes con nuestros proveedores, basadas en la confianza mutua y la ética de trabajo."
            examples={[
              "Durman de Colombia S.A.S",
              "Franklin Electric",
              "Hydro Smart",
              "Grupo sidelúrgico Reyna S.A.S"
            ]}
          />
          <ToggleCard
            title="Clientes"
            image={TH_clientes}
            description="Nuestro compromiso es brindar soluciones de alta calidad que satisfagan las necesidades de nuestros clientes, con honestidad y dedicación."
            examples={[
              "Grupo Diana",
              "Arroz Sonora",
              "Alcaldía de Yopal",
              "Gobernación de Casanare",
              "Termo Yopal",
              "RefoEnergy",
              "Ecotono Consultores Cía Ltda",
              "ADECO LTda",
              "Vitis Olei - Aceite de vida",
              "SENA (Servicio Nacional de Aprendizaje)",
              "CAMEL",
              "Alcaldía de San Luis de Palenque",
              "Alcaldia de Saldaña - Tolima",
              "Alcaldía de Tauramena",
              "Empresa Social de Estado - Salud Yopal",
              "TechnipFMC",
              "SMAYD LTda",
              "Parque Acuático NACUA"
            ]}
          />
        </div>
      </section>

      {/* ===============================
          4. PLANTEL DE EMPLEADOS
          =============================== */}
      <section className="plantel-empleados anim-section">
        <h2>
          Equipo de Trabajo -{" "}
          {view === "administrativa" ? "Administrativa" : "Operativa"}
        </h2>
        <div className={`empleados-container ${animate ? "fade" : ""}`}>
          {empleados.map((empleado, index) => (
            <div className="empleado" key={index}>
              <img src={empleado.foto} alt={empleado.nombre} />
              <div className="empleado-info">
                <h3>{empleado.nombre}</h3>
                <p>{empleado.cargo}</p>
                <p className="profesion">{empleado.profesion}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="navigate-button" onClick={toggleView}>
          {view === "administrativa" ? "Ver Operativa" : "Ver Administrativa"}
        </button>
      </section>
    </div>
  );
}

export default TalentoHumano;
