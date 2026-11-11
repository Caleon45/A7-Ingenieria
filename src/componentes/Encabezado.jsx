import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Encabezado.css";
import Logo from "../assets/Logo.png";

function Encabezado() {
  // Estados del menú y búsqueda
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mostrarServicios, setMostrarServicios] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuAbierto(false);
      setMostrarServicios(false);
    }
  };

  const toggleBuscador = () => {
    setIsSearchOpen(true);
  };

  // Índice de búsqueda exhaustivo
  const searchItems = [
    // --- INICIO ---
    { keyword: "inicio", section: "Inicio", route: "/" },
    { keyword: "carrusel", section: "Inicio", route: "/" },
    { keyword: "unidades de negocio", section: "Inicio", route: "/" },
    { keyword: "sostenibilidad", section: "Inicio", route: "/" },
    
    // --- EMPRESA ---
    { keyword: "empresa", section: "Empresa", route: "/empresa" },
    { keyword: "quiénes somos", section: "Empresa", route: "/empresa" },
    { keyword: "misión", section: "Empresa", route: "/empresa" },
    { keyword: "visión", section: "Empresa", route: "/empresa" },
    { keyword: "línea de tiempo", section: "Empresa", route: "/empresa" },
    { keyword: "fundación az ingeniería 2017", section: "Empresa", route: "/empresa" },
    { keyword: "pozo aeropuerto el alcaraván", section: "Empresa", route: "/empresa" },
    { keyword: "pozo parque de las aguas", section: "Empresa", route: "/empresa" },
    { keyword: "mantenimiento ptap tauramena", section: "Empresa", route: "/empresa" },
    { keyword: "pozos profundos torres del sol", section: "Empresa", route: "/empresa" },
    { keyword: "código ético", section: "Empresa", route: "/empresa" },
    { keyword: "responsabilidad social", section: "Empresa", route: "/empresa" },
    { keyword: "antifraude", section: "Empresa", route: "/empresa" },

    // --- SERVICIOS: OBRAS CIVILES ---
    { keyword: "obras civiles", section: "Obras Civiles", route: "/servicios/civil" },
    { keyword: "construcción de silos diana corporación", section: "Obras Civiles", route: "/servicios/civil" },
    { keyword: "tanque de almacenamiento reserva de agua biomasa", section: "Obras Civiles", route: "/servicios/civil" },
    { keyword: "construcción de pilotes", section: "Obras Civiles", route: "/servicios/civil" },
    { keyword: "edificio casa de fuerza", section: "Obras Civiles", route: "/servicios/civil" },
    { keyword: "cimentación de equipos y zona de caldera", section: "Obras Civiles", route: "/servicios/civil" },
    { keyword: "mantenimiento cámaras de filtración ptap", section: "Obras Civiles", route: "/servicios/civil" },

    // --- SERVICIOS: AGUAS SUBTERRÁNEAS ---
    { keyword: "aguas subterráneas", section: "Aguas Subterráneas", route: "/servicios/estructural" },
    { keyword: "perforación de pozos", section: "Aguas Subterráneas", route: "/servicios/estructural" },
    { keyword: "pozos profundos refoenergy villanueva", section: "Aguas Subterráneas", route: "/servicios/estructural" },
    { keyword: "pozos profundos termoyopal el morro", section: "Aguas Subterráneas", route: "/servicios/estructural" },
    { keyword: "pozo 180m parque de las aguas yopal", section: "Aguas Subterráneas", route: "/servicios/estructural" },
    { keyword: "pozo profundo pvc carrizales norte b", section: "Aguas Subterráneas", route: "/servicios/estructural" },

    // --- SERVICIOS: CONSULTORÍA ---
    { keyword: "consultoría", section: "Consultoría", route: "/servicios/consultoria" },
    { keyword: "permisos ambientales", section: "Consultoría", route: "/servicios/consultoria" },
    { keyword: "puente vehicular río cravo sur", section: "Consultoría", route: "/servicios/consultoria" },
    { keyword: "estudios y diseños alcantarillado villanueva", section: "Consultoría", route: "/servicios/consultoria" },
    { keyword: "estudios geoeléctricos", section: "Consultoría", route: "/servicios/consultoria" },
    { keyword: "prospección de agua", section: "Consultoría", route: "/servicios/consultoria" },

    // --- TALENTO HUMANO: PERSONAL ---
    { keyword: "talento humano", section: "Talento Humano", route: "/talento-humano" },
    { keyword: "zandra carreño gerente", section: "Personal", route: "/talento-humano" },
    { keyword: "camila fernandez hse", section: "Personal", route: "/talento-humano" },
    { keyword: "yohana medina gestión humana", section: "Personal", route: "/talento-humano" },
    { keyword: "denny alarcón contador", section: "Personal", route: "/talento-humano" },
    { keyword: "jhon walteros sg-sst", section: "Personal", route: "/talento-humano" },
    { keyword: "handerson rodríguez ingeniero residente", section: "Personal", route: "/talento-humano" },
    { keyword: "wilder alarcón ingeniero civil", section: "Personal", route: "/talento-humano" },

    // --- TALENTO HUMANO: CLIENTES Y PROVEEDORES ---
    { keyword: "clientes", section: "Talento Humano", route: "/talento-humano" },
    { keyword: "proveedores", section: "Talento Humano", route: "/talento-humano" },
    { keyword: "grupo diana", section: "Clientes", route: "/talento-humano" },
    { keyword: "arroz sonora", section: "Clientes", route: "/talento-humano" },
    { keyword: "alcaldía de yopal", section: "Clientes", route: "/talento-humano" },
    { keyword: "gobernación de casanare", section: "Clientes", route: "/talento-humano" },
    { keyword: "termo yopal", section: "Clientes", route: "/talento-humano" },
    { keyword: "refoenergy", section: "Clientes", route: "/talento-humano" },
    { keyword: "sena", section: "Clientes", route: "/talento-humano" },
    { keyword: "alcaldía de san luis de palenque", section: "Clientes", route: "/talento-humano" },
    { keyword: "alcaldía de saldaña", section: "Clientes", route: "/talento-humano" },
    { keyword: "alcaldía de tauramena", section: "Clientes", route: "/talento-humano" },
    { keyword: "salud yopal", section: "Clientes", route: "/talento-humano" },
    { keyword: "parque acuático nacua", section: "Clientes", route: "/talento-humano" },
    { keyword: "durman", section: "Proveedores", route: "/talento-humano" },
    { keyword: "franklin electric", section: "Proveedores", route: "/talento-humano" },
    { keyword: "hydro smart", section: "Proveedores", route: "/talento-humano" },
    { keyword: "grupo siderúrgico reyna", section: "Proveedores", route: "/talento-humano" },

    // --- CONTACTO ---
    { keyword: "contacto", section: "Contacto", route: "/contacto" },
    { keyword: "teléfonos", section: "Contacto", route: "/contacto" },
    { keyword: "correo electrónico", section: "Contacto", route: "/contacto" },
    { keyword: "dirección", section: "Contacto", route: "/contacto" },
    { keyword: "mapa", section: "Contacto", route: "/contacto" },
    { keyword: "pqrs", section: "Contacto", route: "/contacto" },
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const q = query.trim().toLowerCase();
    const results = searchItems.filter((item) =>
      item.keyword.toLowerCase().includes(q)
    );
    setSearchResults(results);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Agrupar resultados por sección
  const groupedResults = searchResults.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {});

  return (
    <header className="encabezado">
      <div className="encabezado-contenido">
        <div className="encabezado-logo">
          <Link to="/" className="logo-link" onClick={handleLinkClick}>
            <img className="logo-img" src={Logo} alt="Logo AZ Ingeniería" />
            <span className="logo-texto">AZ INGENIERIA DE COLOMBIA S.A.S</span>
          </Link>
        </div>
        <nav className={`nav-menu ${menuAbierto ? "activo" : ""}`}>
          <ul>
            <li className="nav-item">
              <Link to="/" onClick={handleLinkClick}>INICIO</Link>
            </li>
            <li className="nav-item submenu"
                onMouseEnter={!isMobile ? () => setMostrarServicios(true) : undefined}
                onMouseLeave={!isMobile ? () => setMostrarServicios(false) : undefined}>
              <div className="submenu-trigger">
                {isMobile ? (
                  <div className="servicios-trigger" onClick={() => setMostrarServicios(!mostrarServicios)}>
                    SERVICIOS <span className="flecha">▼</span>
                  </div>
                ) : (
                  <Link to="/servicios" onClick={handleLinkClick}>
                    SERVICIOS <span className={`flecha ${mostrarServicios ? "rotada" : ""}`}>▾</span>
                  </Link>
                )}
              </div>
              <ul className={`submenu-lista ${mostrarServicios ? "activo" : ""}`}>
                <li className="submenu-item">
                  <Link to="/servicios/civil" onClick={handleLinkClick}>Obras Civiles</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/servicios/estructural" onClick={handleLinkClick}>Aguas Subterráneas</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/servicios/consultoria" onClick={handleLinkClick}>Consultoría</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/empresa" onClick={handleLinkClick}>EMPRESA</Link>
            </li>
            <li className="nav-item">
              <Link to="/talento-humano" onClick={handleLinkClick}>TALENTO HUMANO</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" onClick={handleLinkClick}>CONTACTO</Link>
            </li>
            <li className="nav-item search-btn" onClick={toggleBuscador}>
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </li>
          </ul>
        </nav>
        {isMobile && (
          <button className={`hamburguesa ${menuAbierto ? "activo" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
      {isSearchOpen && (
        <div className="spotlight-overlay" onClick={closeSearch}>
          <div className="spotlight-modal" onClick={(e) => e.stopPropagation()}>
            <div className="spotlight-header">
              <svg className="spotlight-icon" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="spotlight-input"
                placeholder="¿Qué estás buscando?"
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
              <button className="spotlight-close" onClick={closeSearch}>&times;</button>
            </div>
            
            {searchQuery.trim() !== "" && (
              <div className="spotlight-results">
                {Object.keys(groupedResults).length === 0 ? (
                  <p className="spotlight-empty">No se encontraron resultados para "{searchQuery}"</p>
                ) : (
                  Object.keys(groupedResults).map((section) => (
                    <div key={section} className="spotlight-section">
                      <h4 className="spotlight-section-title">{section}</h4>
                      <ul className="spotlight-list">
                        {groupedResults[section].map((item, index) => (
                          <li key={index}>
                            <Link to={item.route} onClick={closeSearch} className="spotlight-link">
                              {item.keyword.charAt(0).toUpperCase() + item.keyword.slice(1)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Encabezado;
