// src/paginas/Empresa.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Empresa.css";

import EmpresaPortada from "../assets/Empresa-portada.png";

// Imágenes de la línea de tiempo
import Empresa_H1 from "../assets/Empresa_H1.png";
import Empresa_H2 from "../assets/Empresa_H2.png";
import Empresa_H3 from "../assets/Empresa_H3.png";
import Empresa_H4 from "../assets/Empresa_H4.png";
import Empresa_H5 from "../assets/Empresa_H5.png";

import Empresa2 from "../assets/Empresa_2.png";
import Empresa3 from "../assets/Empresa_3.jpeg";
import Empresa4 from "../assets/Empresa_4.png";

// PDFs importados: se asume que los archivos están en "src/assets/pdf/" y que los nombres coinciden exactamente.
import CodigoEticoPDF from "../assets/pdf/Codigo Etico.pdf";
import ProgramasRSC from "../assets/pdf/Programas de Responsabilidad Social Corporativa.pdf";
import ProgramaAntifraude from "../assets/pdf/Programa de cumplimiento antifraude.pdf";

function Empresa() {
  // Estado que maneja el PDF seleccionado (almacena la llave para acceder al URL)
  //const [activePdf, setActivePdf] = useState(null);

  // Diccionario para mapear cada opción a su PDF correspondiente.
  const pdfFiles = {
    "Programas de Responsabilidad Social Corporativa": ProgramasRSC,
    "Codigo Etico": CodigoEticoPDF,
    "Programa de cumplimiento antifraude": ProgramaAntifraude,
  };
    

  // Estados y refs para la línea de tiempo y otras secciones.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // "slide-in-left" | "slide-in-right" | ""
  const sectionRefs = useRef([]);

  // Datos de la línea de tiempo
  const timelineData = [
    {
      year: "2017",
      title: "Fundación de AZ Ingeniería de Colombia S.A.S",
      image: Empresa_H1,
    },
    {
      year: "2017",
      title: "Construcción del pozo al Aeropuerto el Alcaraván",
      image: Empresa_H2,
    },
    {
      year: "2018",
      title: "Pozo - Parque de las Aguas",
      image: Empresa_H3,
    },
    {
      year: "2019",
      title: "Mantenimiento de PTAP al municipio de Tauramena",
      image: Empresa_H4,
    },
    {
      year: "2019",
      title: "Construcción de pozos profundos - Torres del Sol",
      image: Empresa_H5,
    },
  ];

  // Control de la navegación en la línea de tiempo.
  const handleNext = () => {
    setDirection("slide-in-right");
    setCurrentIndex((prev) => (prev + 1) % timelineData.length);
    setTimeout(() => setDirection(""), 500);
  };

  const handlePrev = () => {
    setDirection("slide-in-left");
    setCurrentIndex((prev) =>
      (prev - 1 + timelineData.length) % timelineData.length
    );
    setTimeout(() => setDirection(""), 500);
  };

  // IntersectionObserver para animaciones de scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current
      .filter(Boolean)
      .forEach((section) => observer.observe(section));

    return () => {
      sectionRefs.current
        .filter(Boolean)
        .forEach((section) => observer.unobserve(section));
    };
  }, []);

  const currentItem = timelineData[currentIndex];

  return (
    <div className="empresa-contenedor">
      {/* Sección Hero */}
      <section className="empresa-hero">
        <div className="hero-imagen-contenedor">
          <img
            src={EmpresaPortada}
            alt="Portada de la empresa"
            className="hero-imagen"
          />
        </div>
        <div className="hero-texto">
          <h2>Empresa</h2>
        </div>
      </section>

      {/* Línea de Tiempo */}
      <div className="timeline-container">
        <div className="timeline-slide-container">
          <h2 className="timeline-heading">Línea de Tiempo</h2>
          <div className={`timeline-slide ${direction}`}>
            <div className="timeline-image-container">
              <div className="timeline-image-placeholder">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="timeline-image"
                />
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{currentItem.year}</div>
              <h3 className="timeline-title">{currentItem.title}</h3>
            </div>
          </div>
          <button className="timeline-arrow prev" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="timeline-arrow next" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Sección Quiénes Somos */}
      <main className="empresa-main">
        <section
          className="quienes-somos animate-section"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div className="quienes-texto">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Somos una empresa colombiana desarrolladora de proyectos de obras
              civiles que incluyen etapas de diseño, estructuración y
              construcción. Además, contamos con una línea especial dedicada a
              los pozos profundos, abarcando desde la prospección hasta la
              extracción y mantenimiento del recurso hídrico.
            </p>
          </div>
          <div className="quienes-imagen">
            <img src={Empresa2} alt="Quiénes Somos" className="quienes-img" />
          </div>
        </section>

        {/* Sección Misión */}
        <div className="mision-franja">
          <section
            className="mision-contenido animate-section"
            ref={(el) => (sectionRefs.current[1] = el)}
          >
            <div className="mision-imagen">
              <img src={Empresa3} alt="Imagen de Misión" className="mision-img" />
            </div>
            <div className="mision-texto">
              <h2>Misión</h2>
              <p>
                En AZ INGENIERIA DE COLOMBIA SAS estamos comprometidos con el
                desarrollo del país, ofreciendo servicios de construcción y
                consultoría que cumplen con altos estándares de calidad, legales y
                ambientales.
              </p>
            </div>
          </section>
        </div>

        {/* Sección Visión */}
        <section
          className="vision animate-section"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="vision-texto">
            <h2>Visión</h2>
            <p>
              Para el año 2030, AZ INGENIERIA DE COLOMBIA SAS será reconocida a nivel
              nacional por la seguridad, eficacia y calidad de sus servicios,
              respaldada por un equipo humano comprometido.
            </p>
          </div>
          <div className="vision-imagen">
            <img src={Empresa4} alt="Imagen de Visión" className="vision-img" />
          </div>
        </section>
        {/* Sección de Lectura de Archivos PDF - lo dejo comentado para no eliminar esta funcionalidad*/}
        {/*<section
          className="pdf-section animate-section"
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div className="pdf-inner">
            <h2 className="pdf-title">Nuestros Compromisos</h2>
            <div className="pdf-content">
              <div className="pdf-buttons">
                <button
                  onClick={() =>
                    setActivePdf("Programas de Responsabilidad Social Corporativa")
                  }
                >
                  Programas de Responsabilidad Social Corporativa
                </button>
                <button onClick={() => setActivePdf("Codigo Etico")}>
                  Código Ético
                </button>
                <button
                  onClick={() => setActivePdf("Programa de cumplimiento antifraude")}
                >
                  Programa de cumplimiento antifraude
                </button>
              </div>
              <div className="pdf-viewer">
                {activePdf ? (
                  // El iframe muestra el PDF seleccionado. Se ajusta el tamaño según lo necesario.
                  <iframe
                    src={pdfFiles[activePdf]}
                    title="PDF Viewer"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                  />
                ) : (
                  <p>Selecciona un PDF para visualizarlo</p>
                )}
              </div>
            </div>
          </div>
        </section>
        */}
      </main>
    </div>
  );
}

export default Empresa;
