
let textoUsuario = document.querySelector('#textoUsuario'),
    textoEncriptado = document.querySelector('#textoEncriptado'),
    btnEncriptar = document.querySelector('#btn-Encriptar'),
    btnDesencriptar =document.querySelector('#btn-Desencriptar');

const encriptado = {
     a : 'ai',
     e : 'enter',
     i : 'imes',
     o : 'ober',
     u : 'ufat',
}

let textocompleto = '';


btnEncriptar.addEventListener('click', () => {

     let encriptar = Array.from(textoUsuario.value);

     encriptarTexto(encriptar);
     textocompleto = encriptar.join("");
     console.log(textocompleto);
     textoEncriptadoPantalla(textocompleto);
     return textocompleto; 
     
});


btnDesencriptar.addEventListener('click', (e) => {
     let Desencriptar = textocompleto;
     desencriptarTexto(Desencriptar);
     textoEncriptadoPantalla(textocompleto);

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

const desencriptarTexto = (textocompleto)=>{
     for(let i = 0; i <= textocompleto.length; i++){
          if(textocompleto.includes('ai') == true){
               textocompleto = textocompleto.replace('ai','a');
          }else if(textocompleto.includes('enter') == true){
               textocompleto = textocompleto.replace('enter','e');
          }else if(textocompleto.includes('imes') == true){
               textocompleto = textocompleto.replace('imes','i');
          }else if(textocompleto.includes('ober') == true){
               textocompleto = textocompleto.replace('ober','o');
          }else if(textocompleto.includes('ufat') ==true){
               textocompleto = textocompleto.replace('ufat','u');
          }
     }
     return textocompleto;
}

const textoEncriptadoPantalla = (textocompleto)=>{
     textoEncriptado.value = textocompleto;
     textocompleto = '';
}

