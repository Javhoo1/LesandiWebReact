import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import '../Css/Games.css'

export default function Games(){
    return(
        
        <div class="card mb-3 game-card">
            <img src="juego2.jpg" class="card-img-top game-card-img-top" />
            <div class="card-body game-card-body">
                <h5 class="card-title"><a href="Lesandi1.html">Juego 1</a></h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
}