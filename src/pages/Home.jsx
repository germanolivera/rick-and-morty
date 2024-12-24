/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import '../estilos/Home.css'

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-container container-fluid bg-light d-flex justify-content-center align-items-center vh-100">
            <div className="row text-center content-box">
                <p className="fs-1 txt-azul">Proyect Rick & Morty</p>
                <p className="fs-2 txt-azul">Welcome to Rick & Morty Proyect!</p>
                <p className="txt-azul">
                    This project was made for practicing React and creating a
                    functional website.
                </p>
                <p className="txt-azul">
                    In this website, you can find information about the
                    characters of this animated series.
                </p>
                <p className="txt-azul">
                    You can also filter by different properties to find the
                    character you are looking for or send us a message for any
                    concern or suggestion.
                </p>
                <p className="fs-2 txt-azul">Let's go!</p>
                <div>
                    <button
                        className="shadow miBoton rounded botones"
                        onClick={() => navigate("/Galeria")}>
                        Characters
                    </button>
                    <button
                        className="shadow miBoton rounded botones"
                        onClick={() => navigate("/Contacto")}>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}