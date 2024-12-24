/** @format */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../estilos/menu.css";

export default function Menu() {
    const [menuAbierto, setMenuAbierto] = useState(false); // Estado para controlar el menú
    const location = useLocation(); // Hook para obtener la ruta actual

    // Función para alternar el menú tipo sandwich
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    // Función para determinar si un ítem está activo
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="menu-container">
            <div className="menu-left">
                <Link
                    to="/"
                    className={`menu-item ${isActive("/") ? "active" : ""}`}
                >
                    Home
                </Link>
            </div>
            <div className={`menu-right ${menuAbierto ? "menu-open" : ""}`}>
                <Link
                    to="/galeria"
                    className={`menu-item ${isActive("/galeria") ? "active" : ""}`}
                >
                    Galeria
                </Link>
                <Link
                    to="/contacto"
                    className={`menu-item ${isActive("/contacto") ? "active" : ""}`}
                >
                    Contacto
                </Link>
            </div>
            <div className="menu-sandwich" onClick={toggleMenu}>
                <div className="sandwich-bar"></div>
                <div className="sandwich-bar"></div>
                <div className="sandwich-bar"></div>
            </div>
        </nav>
    );
}
