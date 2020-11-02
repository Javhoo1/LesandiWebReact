import React from 'react';
import validate from '../RegisterComponents/validateInfo';
import useForm from '../RegisterComponents/useForm';
import '../Css/Form.css';

class RegisterForm extends React.Component{


    state = {}

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
    
            <div className='form-content'>
            <form onSubmit={this.handleSubmit} className='form' noValidate>
                <h1>
                    CREA TU CUENTA
                </h1>
            <div className='form-inputs'>
                <label className='form-label'>Nombre de usuario</label>
                <input
                    className='form-input'
                    type='text'
                    name='user_name'
                    placeholder='Ingresa tu nombre de usuario'
                    value={this.state.user_name}
                    onChange={this.handleChange}
                />
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Nombre</label>
                <input
                    className='form-input'
                    type='text'
                    name='nombre'
                    placeholder='Ingresa tu nombre'
                    value={this.state.nombre}
                    onChange={this.handleChange}
                />
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Contraseña</label>
                <input
                    className='form-input'
                    type='password'
                    name='password'
                    placeholder='Ingresa tu contraseña'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Ingresa nuevamente tu contraseña</label>
                <input
                    className='form-input'
                    type='password'
                    name='password2'
                    placeholder='Confirma tu contraseña'
                    value={this.state.password2}
                    onChange={this.handleChange}
                />
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Ingresa tu grado escolar</label>
                <select
                    className="form-control"
                    name='grade'
                    value={this.state.grade}
                    onChange={this.handleChange}
                >
                    <option value='primer_grado'>Primer Grado</option>
                    <option value='segundo_grado'>Segundo Grado</option>
                    <option value='tercer_grado'>Tercer Grado</option>
                    <option value='otro'>Otro</option>
                </select>
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Ingresa el nombre de institución</label>
                <input
                    className='form-input'
                    type='text'
                    name='institution'
                    placeholder='Nombre institución (opcional)'
                    value={this.state.institution}
                    onChange={this.handleChange}
                />
            </div>
            <button className='form-input-btn' type='submit'>
                Crear Cuenta
            </button>
            <span className='form-input-login'>
                ¿Ya tienes una cuenta? Inicia sesión <a href='Login'>aquí</a>
            </span>
            </form>
            </div>
        )
    }
}

export default RegisterForm