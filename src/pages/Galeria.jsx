/** @format */

import React, { useState, useEffect } from "react";
import MenuSuperior from "../components/MenuSuperior";
import "../estilos/galeria.css";

export default function Galeria() {
    const [personajes, setPersonajes] = useState([]); // Estado para todos los personajes
    const [personajesFiltrados, setPersonajesFiltrados] = useState([]); // Estado para los personajes filtrados
    const [personajeActivo, setPersonajeActivo] = useState(null); // Estado para el personaje activo

    // Estado inicial de los filtros con valores booleanos
    const [filtros, setFiltros] = useState({
        statusAlive: false,
        statusDead: false,
        genderFemale: false,
        genderMale: false,
        originUnknown: false,
    });

    // Función para obtener los datos de la API
    async function obtenerCaracteresPersonajes() {
        try {
            const response = await fetch(
                "https://rickandmortyapi.com/api/character"
            );
            if (!response.ok)
                throw new Error(`Error en HTTP: ${response.status}`);
            const data = await response.json();
            setPersonajes(data.results); // Guardar todos los personajes
            setPersonajesFiltrados(data.results); // Inicialmente, mostrar todos los personajes
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    // Llamar a la función al montar el componente
    useEffect(() => {
        obtenerCaracteresPersonajes();
    }, []);

    // Efecto para aplicar los filtros dinámicamente
    useEffect(() => {
        let filtrados = personajes;

        // Aplicar filtros según los toggles activados
        if (filtros.statusAlive) {
            filtrados = filtrados.filter(
                (personaje) => personaje.status === "Alive"
            );
        }
        if (filtros.statusDead) {
            filtrados = filtrados.filter(
                (personaje) => personaje.status === "Dead"
            );
        }
        if (filtros.genderFemale) {
            filtrados = filtrados.filter(
                (personaje) => personaje.gender === "Female"
            );
        }
        if (filtros.genderMale) {
            filtrados = filtrados.filter(
                (personaje) => personaje.gender === "Male"
            );
        }
        if (filtros.originUnknown) {
            filtrados = filtrados.filter(
                (personaje) => personaje.origin.name.toLowerCase() === "unknown"
            );
        }

        setPersonajesFiltrados(filtrados);
    }, [filtros, personajes]);

    // Función para manejar el cambio en los toggles
    const manejarCambioFiltro = (filtro) => {
        setFiltros((prevFiltros) => ({
            ...prevFiltros,
            [filtro]: !prevFiltros[filtro], // Alterna el valor del filtro
        }));
    };

    return (
        <div className="fondoGaleria">
            <MenuSuperior />
            <div className="galeria-container">
                <h1 className="my-5">Galeria de Personajes</h1>
                {/* Filtros con Toggle Switches */}
                <div className="flex-column flex-sm-row filter-container">
                    <label className="filter-toggle">
                        <input
                            type="checkbox"
                            onChange={() => manejarCambioFiltro("statusAlive")}
                            checked={filtros.statusAlive}
                        />
                        <span className="toggle-slider"></span>
                        Character Alive
                    </label>
                    <label className="filter-toggle">
                        <input
                            type="checkbox"
                            onChange={() => manejarCambioFiltro("statusDead")}
                            checked={filtros.statusDead}
                        />
                        <span className="toggle-slider"></span>
                        Character Dead
                    </label>
                    <label className="filter-toggle">
                        <input
                            type="checkbox"
                            onChange={() => manejarCambioFiltro("genderFemale")}
                            checked={filtros.genderFemale}
                        />
                        <span className="toggle-slider"></span>
                        Female
                    </label>
                    <label className="filter-toggle">
                        <input
                            type="checkbox"
                            onChange={() => manejarCambioFiltro("genderMale")}
                            checked={filtros.genderMale}
                        />
                        <span className="toggle-slider"></span>
                        Male
                    </label>
                    <label className="filter-toggle">
                        <input
                            type="checkbox"
                            onChange={() =>
                                manejarCambioFiltro("originUnknown")
                            }
                            checked={filtros.originUnknown}
                        />
                        <span className="toggle-slider"></span>
                        Origin Unknown
                    </label>
                </div>

                {/* Galería */}
                <div className="galeria-grid">
                    {personajesFiltrados.map((personaje) => (
                        <div
                            key={personaje.id}
                            className={`card ${
                                personajeActivo === personaje.id ? "active" : ""
                            }`}>
                            {personajeActivo === personaje.id ? (
                                <div className="card-details">
                                    <button
                                        className="close-btn"
                                        onClick={() =>
                                            setPersonajeActivo(null)
                                        }>
                                        X
                                    </button>
                                    <img
                                        src={personaje.image}
                                        alt={personaje.name}
                                        className="card-img"
                                    />
                                    <h3>{personaje.name}</h3>
                                    <p className="textos-tarjetas">
                                        <strong>Status:</strong>{" "}
                                        {personaje.status}
                                    </p>
                                    <p className="textos-tarjetas">
                                        <strong>Species:</strong>{" "}
                                        {personaje.species}
                                    </p>
                                    <p className="textos-tarjetas">
                                        <strong>Origin:</strong>{" "}
                                        {personaje.origin.name}
                                    </p>
                                    <p className="textos-tarjetas">
                                        <strong>Gender:</strong>{" "}
                                        {personaje.gender}
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <img
                                        src={personaje.image}
                                        alt={personaje.name}
                                        className="card-img"
                                    />
                                    <div className="card-body">
                                        <h3>{personaje.name}</h3>
                                        <button
                                            className="shadow btn-more"
                                            onClick={() =>
                                                setPersonajeActivo(personaje.id)
                                            }>
                                            Know More..
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
