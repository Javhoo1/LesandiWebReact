import React from 'react';

import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar1'

/* CSS */
import '../Css/Contacto.css'
/* CSS */

export default function Contacto(){
    return(
        
        <body className="bodyContacto">
            <NavBar/>
                <div className="divContactoTop">
                    <div className="divContacto">
                        <h1 className="h1Contacto">Contacto</h1>
                        <h3 className="h3Contacto"></h3>
                    </div>
                </div>
            <Footer/>
        </body>
        
        
    );
}