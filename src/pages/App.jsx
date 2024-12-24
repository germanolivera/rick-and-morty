/** @format */

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Galeria from "./Galeria";
import Contacto from "./Contacto";
import '../estilos/App.css'

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/Galeria"
                element={<Galeria />}
            />
            <Route
                path="/Contacto"
                element={<Contacto />}
            />
        </Routes>
    );
}
