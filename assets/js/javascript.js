function agregarFrutas() {
  var texto = document.getElementById("frutasIntroducidas").value;
  var li = document.createElement("li"); 
  
  li.innerHTML = texto == ''?'(fruta sin nombre)':texto;
  document.getElementById('lista').appendChild(li);
}
/*
  1. que el boton agrege el texto al arregloFrutas

  2. que el arreglo de frutas se llene según las frutas agregadas
  3. Imprimir frutas agregadas a la lista
*/

function removeLi() {
  var lista = document.getElementById("lista");
  var elemento= document.getElementsByTagName("li");
  var i = elemento.length -1;
  lista.removeChild(elemento[i]);
  }


/*var texto = document.getElementById("frutasIntroducidas").value;
var li = document.createElement("li");
li.innerHTML = texto;

document.getElementById('lista').appendChild(li);
document.getElementById('lista').appendChild(li);*/