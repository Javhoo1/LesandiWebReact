import React from 'react'

import NavBar from '../Components/NavBar1'
import Footer from '../Components/Footer'

import '../Css/Games1.css'

import {IconoEstrella} from '../Img/Icons'


export default function Games(){
    return(
        
        <div>
            <NavBar/>
            <div className="div-titulo">
                <p>¡EMPIEZA A JUGAR¡</p>
            </div>
            <div className='div-games-left'>
            
 
            <div class="ih-item circle effect4 left_to_right div-circle"><a href="#">
                <div class="img div-img"><img src="numero2.png"/></div>
                <div class="info div-info">
                    <h3>Primer Grado</h3>
                    <p>Con 3 niveles de dificultad</p>
                    <br/>
                    <a role="button" class="button-games">Comenzar</a>
                </div>
            </a></div>

        
            </div>
            <div className='div-games-center'>
            <div class="ih-item circle effect4 left_to_right div-circle"><a href="#">
                <div class="img div-img"><img src="numero2.png"/></div>
                <div class="info div-info">
                    <h3>Segundo Grado</h3>
                    <p>Con 3 niveles de dificultad</p>
                    <br/>
                    <a role="button" class="button-games">Comenzar</a>
                </div>
            </a></div>
            </div>
            <div className='div-games-right'>
            <div class="ih-item circle effect4 left_to_right div-circle"><a href="#">
                <div class="img div-img"><img className="img-circle" src="numero2.png"/></div>
                <div class="info div-info">
                    <h3>Tercer Grado</h3>
                    <p>Con 3 niveles de dificultad</p>
                    <br/>
                    <a role="button" class="button-games">Comenzar</a>
                </div>
            </a></div>
            </div>
            
        </div>
    );
}