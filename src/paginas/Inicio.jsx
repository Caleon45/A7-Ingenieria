import React, { useState, useEffect } from "react";
import "./Inicio.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import PQRS from "./PQRS";

// IMPORTACIONES desde src/assets
import icono1 from "../assets/icono1.png";
import icono2 from "../assets/icono2.png";
import icono3 from "../assets/icono3.png";
import icono4 from "../assets/icono4.png";
import portada2Img from "../assets/portada2.png";
import portada3Img from "../assets/portada3.jpeg";
import portada4Img from "../assets/portada4.jpeg";
import sostenibilidadImg from "../assets/sostenibilidad.png";

function Inicio() {
  // Estado para el carrusel de portada
  const [currentSlide, setCurrentSlide] = useState(0);

  // Estados para el modal
  const [modalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);

  // Definición de las Unidades de Negocio (4 unidades)
  const unidades = [
    {
      id: 1,
      icon: icono1,
      title: "Responsabilidad Social Corporativa",
      longDesc:
        "Fortalecer el vínculo entre AZ INGENIERIA DE COLOMBIA S.A.S. y las comunidades impactadas por la ejecución de los proyectos que ejecutamos o realizamos. A través de iniciativas sostenibles, inclusivas y participativas, se busca generar beneficios sociales duraderos, mejorar la calidad de vida local y fomentar el desarrollo económico, sin comprometer el respeto a la cultura, el entorno y los derechos de las comunidades.",
    },
    {
      id: 2,
      icon: icono2,
      title: "Compromiso Anti-Fraude",
      longDesc:
        "En AZ INGENIERIA DE COLOMBIA SAS, estamos plenamente comprometidos con la transparencia y la probidad en todas nuestras operaciones. A través de nuestro Programa Anti-Fraude, establecemos un marco de actuación que previene y combate cualquier forma de conducta indebida o corrupción. Nos dedicamos a mantener los estándares de integridad, asegurando que nuestros procesos, se realicen con legalidad y ética. Este compromiso no solo protege los intereses de la empresa, sino que también refuerza la confianza de nuestros clientes, socios y de la sociedad en general.",
    },
    {
      id: 3,
      icon: icono3,
      title: "Principios Éticos",
      longDesc:
        "En AZ INGENIERIA DE COLOMBIA S.A.S., creemos firmemente que el éxito de nuestras actividades no solo se mide por la calidad de nuestras obras y servicios, sino también por la forma en que las realizamos. La ética no es una opción, es la base sobre la cual se sostiene cada uno de nuestros proyectos. Este Código de Ética representa la guía fundamental para todos los que formamos parte de esta organización y define los valores que nos inspiran, los principios que guían nuestras decisiones y las conductas que esperamos en todas nuestras actividades. Es esencial actuar con integridad, cumplir la ley, priorizar la seguridad y el respeto mutuo, solo así podremos mantener la confianza de nuestros clientes, preservar nuestra reputación y aportar al desarrollo del país con obras que trasciendan en el tiempo. Nuestro desempeño técnico debe estar siempre acompañado de una conducta ética irreprochable, tanto en nuestras relaciones internas como en nuestra interacción con clientes, proveedores, autoridades, comunidades y la sociedad en general.",
    },
    {
      id: 4,
      icon: icono4,
      title: "Derechos Humanos",
      longDesc:
        "AZ INGENIERÍA DE COLOMBIA SAS mantiene una estrecha relación con el respeto y la promoción de los derechos humanos. La empresa está firmemente comprometida con la protección de la dignidad y los derechos fundamentales de todas las personas involucradas directa o indirectamente en sus actividades. AZ INGENIERÍA DE COLOMBIA SAS garantiza que la ejecución de sus proyectos y procesos se desarrollen en un marco de equidad, no discriminación y respeto por las comunidades. La empresa trabaja de manera proactiva para identificar, prevenir y mitigar cualquier impacto negativo en los derechos humanos que pudiera derivarse de sus operaciones, fomentando un ambiente de trabajo seguro y digno para sus colaboradores y contratistas.",
    },
  ];

  // Slides del carrusel 
  const slides = [
    { type: "image", src: portada2Img },
    { type: "image", src: portada3Img },
    { type: "image", src: portada4Img },
  ];

  // Hook para animaciones por scroll
  useScrollAnimation();

  // Navegación manual del carrusel
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Abrir modal
  const openModal = (unidad) => {
    setSelectedUnit(unidad);
    setModalOpen(true);
    setIsClosing(false);
  };

  // Iniciar cierre (trigger de animación) sin desmontar inmediatamente
  const closeModal = () => {
    setIsClosing(true);
  };

  // Cuando isClosing pasa a true, después de 300ms desmontamos el modal
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setModalOpen(false);
        setSelectedUnit(null);
        setIsClosing(false);
      }, 300); // Debe coincidir con la duración de la animación en CSS (0.3s)
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  return (
    <div className="inicio-contenedor">
      {/* ===============================
          SECCIÓN HERO (Carrusel manual)
         =============================== */}
      <section className="hero">
        <div
          className="hero-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="hero-slide">
              <img
                className="hero-media"
                src={slide.src}
                alt={`Portada ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Botones manuales */}
        <button className="hero-nav prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="hero-nav next" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Overlay de texto */}
        <div className="hero-overlay">
          <h1 className="hero-titulo">Más de 8 años generando</h1>
          <p className="hero-subtitulo">
            Oportunidades de crecimiento y desarrollo en la región
          </p>
        </div>
      </section>

      {/* ===============================
          SECCIÓN UNIDADES DE NEGOCIO
         =============================== */}
      <section className="unidades-negocio animate-section">
        <h2 className="seccion-titulo">Nuestros Compromisos</h2>
        <div className="tarjetas-contenedor">
          {unidades.map((unidad) => (
            <div key={unidad.id} className="tarjeta animate-card">
              <div className="tarjeta-icono">
                <img
                  src={unidad.icon}
                  alt={`Icono ${unidad.id}`}
                  className="icono-tarjeta"
                />
              </div>
              <h3 className="tarjeta-titulo">{unidad.title}</h3>
              <button
                className="tarjeta-boton"
                onClick={() => openModal(unidad)}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===============================
          MODAL EMERGENTE
         =============================== */}
      {modalOpen && selectedUnit && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-content ${isClosing ? "closing" : "opening"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <img
                src={selectedUnit.icon}
                alt={`Icono ${selectedUnit.id}`}
                className="modal-icon"
              />
              <h3 className="modal-title">{selectedUnit.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>{selectedUnit.longDesc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ===============================
          SECCIÓN SOSTENIBILIDAD
         =============================== */}
      <section className="sostenibilidad animate-section">
        <div className="sostenibilidad-contenedor">
          <div className="sostenibilidad-imagen animate-left">
            <img
              src={sostenibilidadImg}
              alt="Imagen Sostenibilidad"
            />
          </div>
          <div className="sostenibilidad-texto animate-right">
            <h2>Por Qué Confiar en AZ INGENIERÍA</h2>
            <p>
              Desde 2017, AZ INGENIERÍA DE COLOMBIA SAS se ha consolidado como líder en ingeniería de aguas subterráneas, destacando por la perforación y mantenimiento de pozos profundos en proyectos clave para sectores industriales, agrícolas y públicos (como el Aeropuerto de Yopal, Sena Paz de Ariporo, y Diana Corporación). Nuestra experticia se expandió exitosamente a obras civiles de alta complejidad a partir de 2021, lo que nos permite gestionar proyectos integrales y de gran envergadura. Un claro ejemplo es la total confianza de Diana Corporación, para quienes hemos desarrollado desde pozos profundos hasta cimentaciones para plantas generadoras y silos de 10.000 toneladas. Contamos con un equipo profesional altamente capacitado en diversas áreas como ingeniería civil, vías, geotecnia, energías no convencionales, y ambiental, posicionándonos como la mejor opción para soluciones de ingeniería completas y de alto impacto en el desarrollo y la industria.
            </p>
          </div>
        </div>
      </section>
      {/* Botón flotante PQRS */}
      <PQRS />
    </div>
  );
}

export default Inicio;
