/** @format */

import React from "react";
import MenuSuperior from '../components/MenuSuperior'
import '../estilos/contacto.css'

export default function Contacto() {
    return (
        <div>
            <div>
                <MenuSuperior />
            </div>
            <div className="txt-blanco container-fluid bg-light d-flex justify-content-center align-items-center vh-100 bg-container">
                <div className="row text-center content-box-azul">
                    <div className="row">
                        <h2 className="text-light">Contact</h2>
                        <p className="text-light">
                            Leave us your information so we can contact you
                        </p>
                    </div>
                    <form
                        className="text-start w-100"
                        action="https://formspree.io/f/xzzbgavb"
                        method="POST">
                        <div className="row">
                            <div className="col">
                                <label
                                    className="text-light form-label"
                                    for="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    class="text-light form-control"
                                    required></input>
                            </div>
                            <div className="col">
                                <label
                                    className="text-light form-label"
                                    for="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="form-control"
                                    required></input>
                            </div>
                        </div>
                        <div className="row mx-0 mt-2">
                            {" "}
                            {/* Coloque Margin-0 para que quede bien alineados en anchos */}
                            <label
                                for="message"
                                className="p-0 text-light form-label">
                                {" "}
                                {/* Coloco un padding = 0 porque queda el label desalineado */}
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control"
                                required
                                rows="5"></textarea>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button
                                    type="submit"
                                    className="shadow-sm rounded miBoton mt-4">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
