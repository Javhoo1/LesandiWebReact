import React from 'react';

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg  nav-navbar ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <a class="navbar-brand" href="Home"><img src="Logo-Lesandi.png" width="60" height="auto"/></a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 navbar-ul">
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="Home">Inicio<span class="sr-only">(current)</span></a>
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
                    <a href="Login" class="btn btn-outline-info" role="button" aria-pressed="true">INICIAR SESIÓN</a>
                    </span>
                    <span class="span-navbar navbar-span-navbar">
                    <a href="Register" class="btn btn-outline-success" role="button" aria-pressed="true">REGISTRARSE</a>
                    </span>
            </div>
        </nav>
    );
}