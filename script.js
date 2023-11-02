// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCXERzzoqwPsmHG8dxtOlCstGWWHXEic84",
    authDomain: "validaciondatos-acf61.firebaseapp.com",
    projectId: "validaciondatos-acf61",
    storageBucket: "validaciondatos-acf61.appspot.com",
    messagingSenderId: "164314087423",
    appId: "1:164314087423:web:6c22565a2ed1c4a59cb1ca",
    measurementId: "G-DVJRSHXQX1"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit', (event) => {
event.preventDefault()

    //validar nombre
    let nombre = document.getElementById('name');
    let nombreError = document.getElementById ('nameError');

if(nombre.value.trim() === ''){
    nombreError.textContent = 'Por favor, introduci tu nombre';
    nombreError.classList.add('error-message');
}else{
    nombreError.textContent = '';
    nombreError.classList.remove('error-message');
}
//validar correo
let mail = document.getElementById('email');
let mailError =  document.getElementById('emailError');
let validarMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!validarMail.test(mail.value)){
    mailError.textContent = 'Por favor introduci un mail valido';
    mailError.classList.add('error-message');

}else{
    mailError.textContent='';
    mailError.classList.remove('error-message');
}
//validar contraseña
let contra = document.getElementById('password');
let contraError = document.getElementById('passwordError');
let validarContra = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

if (!validarContra.test(contra.value)) {
    contraError.textContent = 'Por favor introduci una contraseña incluyendo mayuscula,minuscula y un digito numerico';
    contraError.classList.add('error-message');
}else{
    contraError.textContent='';
    contraError.classList.remove('error-message');
}

if(!nombreError.textContent && !mailError.textContent && !contraError.textContent){

    //BACKEND
    db.collection("users").add({
        nombre: nombre.value,
        mail: mail.value,
        contra: contra.value
    })
    .then((docRef) => {
        alert('El formulario se envio con exito', docRef.id);
        document.getElementById('formulario').reset()
    })
    .catch((error) => {
        alert(error);
    });

    
}
})