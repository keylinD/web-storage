
// obteener informacion del localstorage
//siempre es bueno hacer claupsula si existe 
// guardar_localstorage();
obtener_localstorage();


function obtener_localstorage(){
	if (localStorage.getItem("nombre")) {
		// se que existe el nombre en el localstorage
		let nombre = localStorage.getItem("nombre");
			//obtener el objeto 
			//vamos a pasar el objeto para que deje de ser string
		let persona = JSON.parse(localStorage.getItem("persona"));

		console.log(nombre);
		console.log(persona);

	}else{
		console.log("No hay entradas en el local Storage");
	}

	
}




function guardar_localstorage(){

	let persona = {
		nombre : "Fernando",
		edad : 31,
		correo : "xyz@xyz.com",
		coords: {
			lat : 10,
			lng : -10
		}
	};

	let  nombre = "Pedro";

	localStorage.setItem("nombre", nombre);
	// localStorage.setItem("nombre", persona);
	localStorage.setItem("persona", JSON.stringify(persona) );
	// no puede salir object-object para esoo se tiene que por JSON.stringify
	
}