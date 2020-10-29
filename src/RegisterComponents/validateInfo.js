export default function validateInfo(values) {
    let errors = {};
  
    if (!values.user_name.trim()) {
      errors.user_name = 'Nombre de usuario requerido';
    }
  
    if (!values.nombre.trim()) {
      errors.nombre = 'Nombre requerido';
    }
  
    if (!values.password) {
      errors.password = 'Contraseña requerida';
    } else if (values.password.length < 6) {
      errors.password = 'Contraseña debe tener mas de 6 caracteres';
    }
  
    if (!values.password2) {
      errors.password2 = 'Campo requerido';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Contraseña no coincide';
    }
    
    if (!values.grade.trim()) {
      errors.grade = 'Grado requerido';
    }
  
    return errors;
    }