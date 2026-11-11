import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Encabezado from "./componentes/Encabezado.jsx";
import PieDePagina from "./componentes/PieDePagina.jsx";
import Inicio from "./paginas/Inicio.jsx";
import Servicios from "./paginas/Servicios.jsx";
import Empresa from "./paginas/Empresa.jsx";
import TalentoHumano from "./paginas/TalentoHumano.jsx";
import Contacto from "./paginas/Contacto.jsx";
import "./estilos/estilos.css";

function App() {
  return (
    <Router>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:seccion" element={<Servicios />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/talento-humano" element={<TalentoHumano />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <PieDePagina />
    </Router>
  );
}

export default App;