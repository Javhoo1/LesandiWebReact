import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'


import Form from './RegisterComponents/Form'
import RegisterForm from './Register2/RegisterForm'
import Home from './Pages/Home1'
import Games from './Pages/Games1'
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
              <Route path='/login' component={Login}/>
              <Route path='/nosotros' component={Nosotros}/>
              <Route path='/contacto' component={Contacto}/>
          </Switch>
      </Router>
  );
}
export default App;