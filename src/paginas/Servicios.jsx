import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Servicios.css";
import ServiciosPortada from "../assets/ServiciosPortada.png";
import martilloGif from "../assets/martillo.gif";

// ================================
// IMPORTACIONES PARA OBRAS CIVILES
// ================================
import proyecto1 from "../assets/proyecto1.jpeg";
import proyecto2 from "../assets/proyecto2.jpeg";
import proyecto3 from "../assets/proyecto3.jpg";
import proyecto21 from "../assets/proyecto21.jpeg";
import proyecto22 from "../assets/proyecto22.jpeg";
import proyecto23 from "../assets/proyecto23.JPG";
import proyecto31 from "../assets/proyecto31.jpeg";
import proyecto32 from "../assets/proyecto32.jpeg";
import proyecto33 from "../assets/proyecto33.jpeg";
import proyecto34 from "../assets/proyecto34.jpeg";
import proyecto35 from "../assets/proyecto35.jpeg";
import proyecto36 from "../assets/proyecto36.jpeg";
import proyecto37 from "../assets/proyecto37.jpeg";
import proyecto38 from "../assets/proyecto38.jpeg";
import proyecto39 from "../assets/proyecto39.jpeg";
import proyecto310 from "../assets/proyecto310.jpeg";
import proyecto311 from "../assets/proyecto311.jpeg";
import proyecto312 from "../assets/proyecto312.jpeg";
import proyecto41 from "../assets/proyecto41.jpeg";
import proyecto42 from "../assets/proyecto42.jpeg";
import proyecto43 from "../assets/proyecto43.jpeg";
import proyecto44 from "../assets/proyecto44.jpeg";
import proyecto45 from "../assets/proyecto45.jpeg";
import proyecto46 from "../assets/proyecto46.jpeg";
import proyecto47 from "../assets/proyecto47.jpg"
import proyecto48 from "../assets/proyecto48.jpeg"
import proyecto49 from "../assets/proyecto49.jpeg"
import proyecto410 from "../assets/proyecto410.jpeg"
import proyecto51 from "../assets/proyecto51.jpeg";
import proyecto52 from "../assets/proyecto52.jpeg";
import proyecto53 from "../assets/proyecto53.jpeg";

// =====================================
// IMPORTACIONES PARA AGUAS SUBTERRÁNEAS
// =====================================
import AS1_1 from "../assets/AS1_1.jpeg";
import AS1_2 from "../assets/AS1_2.jpeg";
import AS1_3 from "../assets/AS1_3.jpeg";
import AS2_1 from "../assets/AS2_1.jpeg";
import AS2_2 from "../assets/AS2_2.jpeg";
import AS2_3 from "../assets/AS2_3.jpeg";
import AS3_1 from "../assets/AS3_1.jpeg";
import AS3_2 from "../assets/AS3_2.jpeg";
import AS3_3 from "../assets/AS3_3.jpeg";
import AS4_1 from "../assets/AS4_1.jpeg";
import AS4_2 from "../assets/AS4_2.jpeg";
import AS4_3 from "../assets/AS4_3.jpeg";

// ==============================
// IMPORTACIONES PARA CONSULTORÍA
// ==============================
import C1_1 from "../assets/C1_1.png";
import C1_2 from "../assets/C1_2.jpg";
import C1_3 from "../assets/C1_3.png";
import C2_1 from "../assets/C2_1.png";
import C3_1 from "../assets/C3_1.jpeg";
import C3_2 from "../assets/C3_2.jpeg";
import C3_3 from "../assets/C3_3.jpeg";

// Gif exclusivo de Aguas Subterráneas
import aguaGif from "../assets/agua.gif";
// Gif exclusivo para Consultoría
import consultoriaGif from "../assets/consultoria.gif";

function SubGaleria({ images, title, description }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageChange = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) =>
        direction === "next"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className="galeria-container subseccion">
      <div className="imagen-wrapper">
        {isTransitioning ? (
          <img src={martilloGif} alt="Transición" className="gif-transicion" />
        ) : (
          <img
            src={images[currentImage]}
            alt="Proyecto"
            className={`imagen-proyecto ${isTransitioning ? "fade-out" : "fade-in"}`}
          />
        )}
      </div>
      <div className="controles-galeria">
        <button onClick={() => handleImageChange("prev")} disabled={isTransitioning} className="boton-flecha">
          <span className="flecha izquierda">&#9664;</span>
        </button>
        <button onClick={() => handleImageChange("next")} disabled={isTransitioning} className="boton-flecha">
          <span className="flecha derecha">&#9654;</span>
        </button>
      </div>
      <div className="proyecto-info-estatico">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Componente para Aguas Subterráneas (usa aguaGif y transición de 2 seg)
function SubGaleriaAgua({ images, title, description }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageChange = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    // Duración ajustada a 2 segundos (2000ms)
    setTimeout(() => {
      setCurrentImage((prev) =>
        direction === "next"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 2000);
  };

  return (
    <div className="galeria-container subseccion">
      <div className="imagen-wrapper">
        {isTransitioning ? (
          <img src={aguaGif} alt="Transición Agua" className="gif-transicion-agua" />
        ) : (
          <img
            src={images[currentImage]}
            alt="Proyecto Agua"
            className={`imagen-proyecto ${isTransitioning ? "fade-out" : "fade-in"}`}
          />
        )}
      </div>
      <div className="controles-galeria">
        <button onClick={() => handleImageChange("prev")} disabled={isTransitioning} className="boton-flecha">
          <span className="flecha izquierda">&#9664;</span>
        </button>
        <button onClick={() => handleImageChange("next")} disabled={isTransitioning} className="boton-flecha">
          <span className="flecha derecha">&#9654;</span>
        </button>
      </div>
      <div className="proyecto-info-estatico">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Nuevo componente para Consultoría (usa consultoriaGif y transición de 1 seg)
function SubGaleriaConsultoria({ images, title, description }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageChange = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) =>
        direction === "next"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className="galeria-container subseccion">
      <div className="imagen-wrapper">
        {isTransitioning ? (
          <img src={consultoriaGif} alt="Transición Consultoría" className="gif-transicion-consultoria" />
        ) : (
          <img
            src={images[currentImage]}
            alt="Proyecto Consultoría"
            className={`imagen-proyecto ${isTransitioning ? "fade-out" : "fade-in"}`}
          />
        )}
      </div>
      <div className="controles-galeria">
        <button onClick={() => handleImageChange("prev")} disabled={isTransitioning} className="boton-flecha">
          <span className="flecha izquierda">&#9664;</span>
        </button>
        <button onClick={() => handleImageChange("next")} disabled={isTransitioning} className="boton-flecha">
          <span className="flecha derecha">&#9654;</span>
        </button>
      </div>
      <div className="proyecto-info-estatico">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Servicios() {
  const { seccion } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const proyectosImagenes = [proyecto1, proyecto2, proyecto3];
  const TRANSITION_DURATION = 1000;

  const handleImageChange = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) =>
        direction === "next"
          ? (prev + 1) % proyectosImagenes.length
          : (prev - 1 + proyectosImagenes.length) % proyectosImagenes.length
      );
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTab(0);
  }, [seccion]);

  // VISTA PRINCIPAL (CATEGORÍAS)
  if (!seccion) {
    return (
      <main className="servicios-contenedor">
        <section
          className="portada-servicios"
          style={{ backgroundImage: `url(${ServiciosPortada})` }}
        >
          <div className="portada-contenido">
            <h1>Nuestros Servicios</h1>
          </div>
        </section>

        <section className="categorias-container">
          <h2>Selecciona una Categoría</h2>
          <div className="categorias-grid">
            <Link to="/servicios/civil" className="categoria-card civil">
              <div className="categoria-icon">
                {/* SVG Icon for Obras Civiles */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V7l8-4v18"></path>
                  <path d="M19 21V11l-6-3"></path>
                  <path d="M9 9v.01"></path>
                  <path d="M9 13v.01"></path>
                  <path d="M9 17v.01"></path>
                </svg>
              </div>
              <h3>Obras Civiles</h3>
            </Link>

            <Link to="/servicios/estructural" className="categoria-card estructural">
              <div className="categoria-icon">
                {/* SVG Icon for Aguas Subterráneas */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                </svg>
              </div>
              <h3>Aguas Subterráneas</h3>
            </Link>

            <Link to="/servicios/consultoria" className="categoria-card consultoria">
              <div className="categoria-icon">
                {/* SVG Icon for Consultoría */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>Consultoría</h3>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // VISTA DE DETALLE (PROYECTOS)
  return (
    <main className="servicios-contenedor">
      <div className="boton-volver-container">
        <Link to="/servicios" className="btn-volver">
          &#10094; Volver a Categorías
        </Link>
      </div>

      {seccion === "civil" && (
        <section id="civil" className="servicio obras-civiles detalle">
          <h3>Obras Civiles</h3>
          <div className="tabs-container">
            {["Silos Diana", "Tanque Biomasa", "Pilotes", "Edificio Casa Fuerza", "Mantenimiento PTAP"].map((tabName, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {activeTab === 0 && (
              <div className="galeria-container">
                <div className="imagen-wrapper">
                  {isTransitioning ? (
                    <img src={martilloGif} alt="Transición" className="gif-transicion" />
                  ) : (
                    <img
                      src={proyectosImagenes[currentImage]}
                      alt="Proyecto"
                      className={`imagen-proyecto ${isTransitioning ? "fade-out" : "fade-in"}`}
                    />
                  )}
                </div>
                <div className="controles-galeria">
                  <button onClick={() => handleImageChange("prev")} disabled={isTransitioning} className="boton-flecha">
                    <span className="flecha izquierda">&#9664;</span>
                  </button>
                  <button onClick={() => handleImageChange("next")} disabled={isTransitioning} className="boton-flecha">
                    <span className="flecha derecha">&#9654;</span>
                  </button>
                </div>
                <div className="proyecto-info-estatico">
                  <h4>CONSTRUCCION DE DOS SILOS DE CAPACIDAD DE 10 MIL - DIANA CORPORACION SAS</h4>
                  <p></p>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <SubGaleria
                images={[proyecto21, proyecto22, proyecto23]}
                title="TANQUE DE ALMACENAMIENTO PARA RESERVA DE AGUA DEL PROYECTO DE GENERACION DE ENERGIA ELECTRICA POR BIOMASA DIANA CORPORACION SAS"
              />
            )}
            {activeTab === 2 && (
              <SubGaleria
                images={[proyecto31,proyecto39, proyecto32, proyecto33, proyecto36,proyecto34,proyecto37,proyecto38,proyecto310, proyecto35,proyecto311,proyecto312]}
                title="CONSTRUCCUIÓN DE PILOTES"
              />
            )}
            {activeTab === 3 && (
              <SubGaleria
                images={[proyecto41,proyecto48,proyecto42,proyecto49,proyecto410,proyecto43,proyecto44,proyecto45,proyecto46,proyecto47 ]}
                title="CONSTRUCCIÓN DE OBRAS CIVILES PARA EL EDIFICIO CASA DE FUERZA, CIMENTACION DE EQUIPOS Y ZONA DE CALDERA PARA EL PROYECTO DE GENERACION DE ENERGIA INCLUYE PILOTES, ZAPATAS"
              />
            )}
            {activeTab === 4 && (
              <SubGaleria
                images={[proyecto51, proyecto52, proyecto53]}
                title="MANTENIMIENTO DE LAS CAMARAS DE FILTRACION DE LA PLANTA DOS CON LA QUE CUENTA LA PLANTA DE TRATAMIENTO DE AGUA POTABLE PARA EL CASCO URBANO, QUE OPERA LA EMPRESA MUNICIPAL DE SERVICIOS PUBLICOS DE TAURAMENA EMSET SA ESP"
              />
            )}
          </div>
        </section>
      )}

      {seccion === "estructural" && (
        <section id="estructural" className="servicio aguas-subterraneas detalle">
          <h3>Aguas Subterráneas</h3>
          <div className="tabs-container">
            {["Pozos RefoEnergy", "Pozos TermoYopal", "Pozo Parque Aguas", "Pozo Carrizales"].map((tabName, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {activeTab === 0 && (
              <SubGaleriaAgua
                images={[AS1_1, AS1_2, AS1_3]}
                title="CONSTRUCCION DE DOS POZOS PROFUNDOS PROYECTO GENERACION DE ENERGIA EN  REFOENERGY - VILLANUEVA"
              />
            )}
            {activeTab === 1 && (
              <SubGaleriaAgua
                images={[AS2_1, AS2_2, AS2_3]}
                title="CONSTRUCCION DOS POZOS PROFUNDOS TERMOYOPAL, EL MORRO, YOPAL - CASANARE "
              />
            )}
            {activeTab === 2 && (
              <SubGaleriaAgua
                images={[AS3_1, AS3_2, AS3_3]}
                title="CONSTRUCCION Y PUESTA EN MARCHA DE UN POZO DE 180M DE PROFUNDIDAD A TODO COSTO, INCLUYE EQUIPO DE BOMBEO EN EL PARQUE DE LAS AGUAS DE YOPAL"
              />
            )}
            {activeTab === 3 && (
              <SubGaleriaAgua
                images={[AS4_1, AS4_2, AS4_3]}
                title="CONSTRUCCION UN POZO PROFUNDO REVESTIDO EN PVC RDE 21 DIAMETRO 6” Y SUMINISTRO E INSTALACION DE EQUIPO DE BOMBEO DE 10 HP EN LAS LOCACIONES CARRRIZALES NORTE B, EN LA VEREDA CLAVELES"
              />
            )}
          </div>
        </section>
      )}

      {seccion === "consultoria" && (
        <section id="consultoria" className="servicio consultoria detalle">
          <h3>Consultoría</h3>
          <div className="tabs-container">
            {["Puente Cravo Sur", "Alcantarillado Villanueva", "Prospección Agua"].map((tabName, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {activeTab === 0 && (
              <SubGaleriaConsultoria
                images={[C1_1, C1_2, C1_3]}
                title="PERMISOS AMBIENTALES - ESTUDIO COMPLEMENTARIO PARA LA CONSTRUCCION DEL PUENTE VEHICULAR SOBRE EL RIO CRAVO SUR"
              />
            )}
            {activeTab === 1 && (
              <SubGaleriaConsultoria
                images={[C2_1]}
                title="ESTUDIOS Y DISEÑOS PARA LA OPTIMIZACIÓN DE LOS SISTEMAS DE ALCANTARILLADO SANITARIO, PLUVIAL Y OBRAS COMPLEMENTARIAS EN EL BARRIO BELLO HORIZONTE DEL ÁREA URBANA DEL MUNICIPIO DE VILLANUEVA DEL DEPARTAMENTO DE CASANARE"
              />
            )}
            {activeTab === 2 && (
              <SubGaleriaConsultoria
                images={[C3_1, C3_2, C3_3]}
                title="ESTUDIOS GEOELECTRICOS PARA LA PROSPECCION DE AGUA SUBETERRANEA EN DIFERENTES DEPARTAMENTOS DE COLOMBIA"
              />
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default Servicios;
