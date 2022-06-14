// arreglo con las respuestas correctas

let correctas = [3, 1, 2, 2, 3];

// arreglo donde se guardan las respuestas del usuario

let opcion_elegida = [];

let cantidad_correctas = 0;

// funcion que toma el numero de la pregunta y el input elegido por esa pregunta

function respuesta(num_pregunta, seleccionada){
	// guardo la respuesta seleccionada
	opcion_elegida [num_pregunta] = seleccionada.value;

	// id para seleccionar section correspondiente
	id = "p" + num_pregunta;

	labels = document.getElementById(id).childNodes;
	labels[3].style.backgroundColor = "white";
	labels[5].style.backgroundColor = "white";
	labels[7].style.backgroundColor = "white";
	
	seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

// funcion para saber cuales son las respuestas correctas

function corregir (){
	cantidad_correctas = 0;
	for(i = 0; i < correctas.length; i++){
		if(correctas[i] == opcion_elegida[i]){
			cantidad_correctas++;
		}
	}
	document.getElementById('resultado').innerHTML = cantidad_correctas;
}