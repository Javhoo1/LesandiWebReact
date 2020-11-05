import React from 'react'

import '../Css/NavBarHome.css'

export default function NavBar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light nav-navbar">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <a class="nav-link text-navbar" href="home">Lesandi</a>
            </div>
            <span className="text-navbar-home">Aprender nunca ha sido tan divertido</span>
        </nav>
    );
}