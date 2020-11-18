import React, { Component } from 'react'
// import { login } from './UserFunctions'
import NavBar from '../Components/NavBar1';

import '../Css/Login.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({ user_name: event.target.user_name });
        this.setState({ password: event.target.password });
    }

    handleSubmit(event) {
        alert('Login completado: ' + this.state.user_name);
        event.preventDefault();
    }

    render () {
        return (
            
            <body className="bodyLogin">
                <NavBar/>
                <span className='romboLogin'></span>
                <span className='romboLogin'></span>
                <span className='romboLogin'></span>
                <span className='romboLogin'></span>
                <span className='romboLogin'></span>
            <div className="containerLogin">

                

                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h1-login">Inicia Sesión</h1>
                            <div className="form-group">
                                <label className="label-login">Nombre de Usuario</label>
                                <input type="text"
                                    className="form-control"
                                    name="user_name"
                                    placeholder=""
                                    value={this.state.user_name}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                            <label className="label-login">Contraseña</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder=""
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </div>

                            <button type="submit" className="button-login">
                                Iniciar Sesión
                            </button>
                        </form>
                        <p>¿No tienes cuenta?, <a href="Register">Registrate aquí.</a></p>
                    </div>
                </div>
            </div>
            </body>
        )
    }
}

export default Login