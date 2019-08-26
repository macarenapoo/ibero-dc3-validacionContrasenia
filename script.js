function validarContrasenia() {
  event.preventDefault();
  var password = document.getElementById("password").value;
  var errores = [];
  var longitud = password.length >= 8; // validar si tiene al menos 8 caracteres
  var mayuscula = tieneMayuscula(password); // validar si tiene 1 letra mayúscula
  var minuscula = tieneMinuscula(password); // validar si tiene 1 letra minúscula
  var numero = tieneNumero(password); // validar si tiene al menos 1 número
  var caracterEspecial = tieneCaracterEspecial(password); // validar si tiene al menos 1 caracter especial
 
  if(!longitud) {
    errores.push('La contraseña debe tener al menos 8 caracteres');
  }
  
  if(!mayuscula) {
    errores.push('La contraseña debe tener al menos 1 letra mayúscula');
  }

  if(!minuscula) {
    errores.push('La contraseña debe tener al menos 1 letra minúscula');
  }

  if(!numero) {
    errores.push('La contraseña debe tener al menos 1 número');
  }

  if(!caracterEspecial) {
    errores.push('La contraseña debe tener al menos 1 caracter especial');
  }

  escribirErrores(errores);
  if (errores.length === 0) login();
}

function tieneMayuscula(password) {
  if(contieneCaracteresEntre(password, 65, 90)) {
    return true;
  }
  return false;
}

function tieneMinuscula(password) {
  if(contieneCaracteresEntre(password, 97, 122)) {
    return true;
  }
  return false;
}

function tieneNumero(password) {
  if(contieneCaracteresEntre(password, 48, 57)) {
    return true;
  }
  return false;
}

function tieneCaracterEspecial(password) {
  if(
    contieneCaracteresEntre(password, 33, 47) ||
    contieneCaracteresEntre(password, 58, 64) ||
    contieneCaracteresEntre(password, 91, 96) ||
    contieneCaracteresEntre(password, 123, 126)
  ) {
    return true;
  }
  return false;
}

function contieneCaracteresEntre(string, charCodeStart, charCodeEnd) {
  for(var i=0; i < string.length; i++) {
    if(string.charCodeAt(i) >= charCodeStart && string.charCodeAt(i) <= charCodeEnd) {
      return true;
    }
  }
  return false;
}

function escribirErrores(errores) {
  var contenedor = document.getElementById('errores');
  contenedor.innerHTML = "";

  errores.forEach(function(error) {
    var li = document.createElement('li');
    li.innerHTML = error;
    contenedor.appendChild(li); 
  });
}

function login() {
  var titulo = document.getElementById('titulo');
  var descripcion = document.getElementById('descripcion');
  var contenido = document.getElementById('contenido')

  titulo.innerHTML = "Bienvenido!"
  descripcion.innerHTML = "La contraseña es valida."
  contenido.style.display = "none";
}

function enseniarContrasenia() {
  var icono = document.getElementById('iconoOjo');
  var password = document.getElementById('password');

  if(icono.classList.contains('fa-eye')) {
    icono.classList.remove('fa-eye');
    icono.classList.add('fa-eye-slash');
    password.type = "text";
  } else {
    icono.classList.remove('fa-eye-slash');
    icono.classList.add('fa-eye');
    password.type = "password";
  }
}
