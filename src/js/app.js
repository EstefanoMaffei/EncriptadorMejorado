     //! TEXTO QUE RECIBE DEL USUARIO
let textoUsuario = document.querySelector('#textoUsuario'),
     //! TEXTO A IMPRIMIR DESPUES DE ENCRIPTAR
     textoEncriptado = document.querySelector('#textoEncriptado'),
    //! BTN DE ACTIVACION PARA LAS ACCIONES
     btnEncriptar = document.querySelector('#btn-Encriptar'),
     btnDesencriptar =document.querySelector('#btn-Desencriptar'),
     btnIdiomaingles  = document.querySelector('#english'),
     btnIdiomaespañol = document.querySelector('#español'); 

const encriptado = {
     a : 'ai',
     e : 'enter',
     i : 'imes',
     o : 'ober',
     u : 'ufat',
}

let textocompleto = '';

//! ACTIVAR ENCRIPTADO
btnEncriptar.addEventListener('click', () => {
     let encriptar = Array.from(textoUsuario.value);
     encriptarTexto(encriptar);
     textocompleto = encriptar.join("");
     textoEncriptadoPantalla(textocompleto);
     return textocompleto; 
     
});

//! ACTIVAR DESENCRIPTADO
btnDesencriptar.addEventListener('click', () => {
     let desencriptar = textoUsuario.value
     desencriptarTexto(desencriptar);
     textoEncriptadoPantalla(textocompleto);
     return textocompleto;
})

const encriptarTexto = (texto) => {
     for(let i=0; i<= texto.length; i++){
          if(texto[i] == 'a'){
               texto[i] = encriptado.a;
          }else if(texto[i] == 'e'){
               texto[i] = encriptado.e;
          }else if(texto[i] == 'i'){
               texto[i] = encriptado.i;
          }else if(texto[i] == 'o'){
               texto[i] = encriptado.o;
          }else if(texto[i] == 'u'){
               texto[i] = encriptado.u;
          }
     }

     return texto;
}

//! LOGICA DESENCRIPTADO.
const desencriptarTexto = (desencriptar)=>{
          if(desencriptar.includes('ai') == true){
               desencriptar = desencriptar.replace('ai','a');
          }else if( desencriptar.includes('enter') == true){
               desencriptar = desencriptar.replace('enter','e');
          }else if( desencriptar.includes('imes') == true){
               desencriptar = desencriptar.replace('imes','i');
          }else if( desencriptar.includes('ober') == true){
               desencriptar = desencriptar.replace('ober','o');
          }else if( desencriptar.includes('ufat') == true){
               desencriptar = desencriptar.replace('ufat','u');
          }
     return textocompleto = desencriptar;
}

//! IMPRIMIR RESULTADO EN PANTALLA
const textoEncriptadoPantalla = (e)=>{
     return textoEncriptado.value = e;
}

btnIdiomaespañol.addEventListener('click',()=>{
     let html = document.querySelector('html');
     return html.setAttribute('lang','es');
});
btnIdiomaingles.addEventListener('click',()=>{
     let html = document.querySelector('html');
     html.setAttribute('lang','en');
});


