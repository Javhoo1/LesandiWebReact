import React from 'react';

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg nav-navbar ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="Home"><img src="Logo-Lesandi.jpg" width="70" height="auto"/></a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 navbar-ul">
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="Home">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="Games">Juegos</a>
                    </li>
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item navbar-nav-item">
                        <a class="nav-link navbar-nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                    <span class="span-navbar">
                    <a class="nav-link navbar-nav-link" href="Login">Iniciar Sesión</a>
                    </span>
            </div>
        </nav>
    );
}