import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'


import Form from './RegisterComponents/Form'
import './Css/Footer.css'
import Home from './Pages/Home'

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/home' component={Home}/>
              <Route path='/register' component={Form}/>
          </Switch>
      </Router>
  );
}
export default App;