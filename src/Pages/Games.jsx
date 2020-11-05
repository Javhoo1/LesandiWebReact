import React from 'react'

import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar1'

import 'bootstrap/dist/css/bootstrap.css'
import '../Css/Games.css'

export default function Games(){
    return(

        <div class="div-games">
            <NavBar/>
            <h1 className="h1-games">
                Bienvenido a nuestra seccion de juegos.
            </h1>
        
        <div class="card mb-3 game-card">
            <img src="juego1.jpeg" class="card-img-top game-card-img-top" />
            <div class="card-body game-card-body">
                <h5 class="card-title"><a href="juego1.html">Primero de primaria</a></h5>
                <p class="card-text">
                    Este juego se enfonca en la conciencia fonológica, 3 divertidos niveles para que pongas a prueba
                    tus habilidades de relacionar sonidos con objetos.
                </p>
                <p class="card-text"><small class="text-muted">Conciencia fonológica.</small></p>
            </div>
        </div>

        <div class="card mb-3 game-card">
            <img src="juego2.jpg" class="card-img-top game-card-img-top" />
            <div class="card-body game-card-body">
                <h5 class="card-title"><a href="juego2.html">Segundo de primaria</a></h5>
                <p class="card-text">
                    El objetivo en este juego es relacionar objetos y comprobar si riman, un divertido ejercicio 
                </p>
                <p class="card-text"><small class="text-muted">Conciencia fonológica</small></p>
            </div>
        </div>

        <div class="card mb-3 game-card">
            <img src="juego3.jpg" class="card-img-top game-card-img-top" />
            <div class="card-body game-card-body">
                <h5 class="card-title"><a href="Lesandi1.html">Tercero de primaria</a></h5>
                <p class="card-text">
                    Es hora de poner a prueba todo lo que sabes, en los siguiente 3 niveles queremos saber si eres o no capaz de enfrentar
                    este difícil juego.
                </p>
                <p class="card-text"><small class="text-muted">Comprensión lectora</small></p>
            </div>
        </div>
        <br/>
        <Footer/>
        </div>

    );
}