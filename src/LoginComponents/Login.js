import React, { Component } from 'react'
import { login } from './UserFunctions'

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
            <div className="containerLogin">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal h1-login">Inicia Sesion</h1>
                            <div className="form-group">
                                <label htmlFor="user_name">Ingresa usuario</label>
                                <input type="text"
                                    className="form-control"
                                    name="user_name"
                                    placeholder="Nombre de usuario"
                                    value={this.state.user_name}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Ingresa contraseña </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </div>

                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Iniciar Sesion
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