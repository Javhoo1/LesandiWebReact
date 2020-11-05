import React from 'react';

import Footer from '../Components/Footer'
import NavBar from '../Components/NavBarHome'

/* CSS */
import '../Css/Default.css'
import '../Css/Footer.css'
/* CSS */

import '../Css/ihover.css'

export default function Home(){
    return(
        <body>
        <NavBar/>
            <div className="left-content">

            
                
            <div className="div-logo">
                <div class="div-widht-height ih-item circle colored effect18 right_to_left "><a href="#">
                <div class="img"><img src="Logo-Lesandi2.png" alt="img"/></div>
                <div class="info">
                <div class="info-back">
                    <h3>Bienvenidos a Lesandi</h3>
                    <p>Aprender nunca ha sido tan divertido</p>
                    <img src="niños.png" width="10%" height="auto"></img>
                </div>
                </div></a></div>
            </div>
                
                

                {/* Logo 
                <img className="logo-home" src="Logo-Lesandi2.png"></img>
                */}

            </div>
            <div className="right-content-top">
                <a className="button-login-home" href="login">Iniciar Sesión</a>
            </div>
            <div className="right-content-bottom">
                <a className="button-unete-home" href="register">Registrate</a>
            </div>
            <hr className="hr-home"/>
            <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        </div>
        
            
        
        </body>
    );
}