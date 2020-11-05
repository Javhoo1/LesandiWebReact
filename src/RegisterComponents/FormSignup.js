import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../Css/Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (

      <form onSubmit={handleSubmit} className='form form-register' noValidate>
        <h1 className="h1-register">
          CREA TU CUENTA
        </h1>
        <div className='form-inputs'>

          <input
            className='form-input'
            type='text'
            name='user_name'
            placeholder='Ingresa tu nombre de usuario'
            value={values.user_name}
            onChange={handleChange}
          />
          {errors.user_name && <p>{errors.user_name}</p>}
        </div>
        <div className='form-inputs'>

          <input
            className='form-input'
            type='text'
            name='nombre'
            placeholder='Ingresa tu nombre'
            value={values.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <p>{errors.nombre}</p>}
        </div>
        <div className='form-inputs'>

          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Ingresa tu contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>

          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirma tu contraseña'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>

          <select
            className="form-control"
            name='grade'
            value={values.grade}
            onChange={handleChange}
            autoFocus
          >
            <option>Grado escolar</option>
            <option value='primer_grado'>Primer Grado</option>
            <option value='segundo_grado'>Segundo Grado</option>
            <option value='tercer_grado'>Tercer Grado</option>
            <option value='otro'>Otro</option>
          </select>
          {errors.grade && <p>{errors.grade}</p>}
        </div>
        <div className='form-inputs'>

          <input
            className='form-input'
            type='text'
            name='institution'
            placeholder='Nombre escuela (opcional)'
            value={values.institution}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-info button-login' type='submit'>
          Crear Cuenta
        </button>
        <span className='form-input-login'>
          ¿Ya tienes una cuenta? Inicia sesión <a href='Login'>aquí</a>
        </span>
      </form>
  
  );
};

export default FormSignup;