import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'

import './Css/Index.css'
import './Css/NavBar.css'
import './Css/Footer.css'

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
