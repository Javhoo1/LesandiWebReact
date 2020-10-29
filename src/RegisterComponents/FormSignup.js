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
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
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
            value={values.user_name}
            onChange={handleChange}
          />
          {errors.user_name && <p>{errors.user_name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Nombre</label>
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
          <label className='form-label'>Contraseña</label>
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
          <label className='form-label'>Ingresa nuevamente tu contraseña</label>
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
          <label className='form-label'>Ingresa tu grado escolar</label>
          <select
            className="form-control"
            name='grade'
            value={values.grade}
            onChange={handleChange}
          >
            <option value='primer_grado'>Primer Grado</option>
            <option value='segundo_grado'>Segundo Grado</option>
            <option value='tercer_grado'>Tercer Grado</option>
            <option value='otro'>Otro</option>
          </select>
          {errors.grade && <p>{errors.grade}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Ingresa el nombre de institución</label>
          <input
            className='form-input'
            type='text'
            name='institution'
            placeholder='Nombre institución (opcional)'
            value={values.institution}
            onChange={handleChange}
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
  );
};

export default FormSignup;