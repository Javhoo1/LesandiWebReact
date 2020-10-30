import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'


import Form from './RegisterComponents/Form'
import './Css/Footer.css'
import Home from './Pages/Home'
import Games from './Pages/Games'
import Game1 from './PagesGames/game1'
import Login from './LoginComponents/Login'

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/home' component={Home}/>
              <Route path='/register' component={Form}/>
              <Route path='/games' component={Games}/>
              <Route path='/game1' component={Game1}/>
              <Route path='/login' component={Login}/>
          </Switch>
      </Router>
  );
}
export default App;