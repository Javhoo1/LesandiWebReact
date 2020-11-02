import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'


import Form from './RegisterComponents/Form'
import RegisterForm from './Register2/RegisterForm'
import './Css/Footer.css'
import Home from './Pages/Home'
import Games from './Pages/Games'
import Game1 from './PagesGames/game1'
import Login from './LoginComponents/Login'
import Nosotros from './Pages/Nosotros'
import Contacto from './Pages/Contacto'

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/home' component={Home}/>
              <Route path='/register' component={Form}/>
              <Route path='/register2' component={RegisterForm}/>
              <Route path='/games' component={Games}/>
              <Route path='/game1' component={Game1}/>
              <Route path='/login' component={Login}/>
              <Route path='/nosotros' component={Nosotros}/>
              <Route path='/contacto' component={Contacto}/>
          </Switch>
      </Router>
  );
}
export default App;