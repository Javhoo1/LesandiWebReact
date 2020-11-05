import React from 'react';
import '../Css/NavBar1.css'

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light nav-navbar">
            <a class="navbar-brand text-logo" href="#"><img className="img-navbar" src="Logo-Lesandi2.png" width="60" height="auto"/><span className="text-lesandi">Lesandi</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item li-navbar">
                        <a class="nav-link text-navbar" href="home">Inicio</a>
                    </li>
                    <li class="nav-item li-navbar">
                        <a class="nav-link text-navbar" href="games">Juegos</a>
                    </li>
                    <li class="nav-item li-navbar">
                        <a class="nav-link text-navbar" href="nosotros">Nosotros</a>
                    </li>
                    <li class="nav-item li-navbar">
                        <a class="nav-link text-navbar" href="contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}