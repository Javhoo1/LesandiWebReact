import React, { useState } from 'react';
import NavBar from '../Components/NavBar1';
import '../Css/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div >
        <NavBar z-index='20'/>
      </div>
      <div className="div-rombo-form">
      <span className='rombo'></span>
      <span className='rombo'></span>
      <span className='rombo'></span>
      <span className='rombo'></span>
      <span className='rombo'></span>
      
      <div className='form-container div-form-register'>
      
        {!isSubmitted ? (
          
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      </div>
    </>
  );
};

export default Form;