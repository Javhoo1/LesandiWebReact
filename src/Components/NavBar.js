import React from 'react';

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary nav-navbar ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <a class="navbar-brand" href="Home"><img src="Logo-Lesandi.png" width="70" height="auto"/></a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 navbar-ul">
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="Home">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="Games">Juegos</a>
                    </li>
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="Nosotros">Nosotros</a>
                    </li>
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="Contacto">Contacto</a>
                    </li>
                </ul>
                    <span class="span-navbar navbar-span-navbar">
                        <a class="nav-link navbar-nav-link" href="Login">Iniciar Sesión</a>
                    </span>
                    <span class="span-navbar navbar-span-navbar">
                        <a class="nav-link navbar-nav-link" href="Register">Registrarse</a>
                    </span>
            </div>
        </nav>
    );
}