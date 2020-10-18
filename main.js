window.onload = function (){
	var cantidad = document.getElementById("cantidad");

	let $botonGenerar = document.querySelector('#boton-generar');
	

	$botonGenerar.addEventListener('click', generarCajas);

	var nodoCajas = document.getElementById("cajas")

	function generarCajas() {
		

		for (var i = 0; i < cantidad.value; i++) {
			let nodoRow = document.createElement('div');
			nodoRow.classList.add('row');

			nodoRow.style.marginTop = '10px';
			nodoRow.style.marginBottom = '10px';

			let caja = document.createElement('input');
			caja.classList.add('form-control');
			caja.setAttribute("id", "cajaId"+i);

			let boton = document.createElement('button');
			boton.classList.add('btn', 'btn-primary');
			boton.textContent = 'Boton no '+(i+1);

			boton.setAttribute("id", "botonId"+i);
			boton.setAttribute("name", "botonName"+i);
			//boton.addEventListener('click', getCaja);





			let nodoCaja = document.createElement('div');
			nodoCaja.classList.add('col-sm-4');

			let nodoBoton = document.createElement('div');
			nodoBoton.classList.add('col-sm-4');

			nodoCaja.appendChild(caja);
			nodoBoton.appendChild(boton);

			nodoRow.appendChild(nodoCaja);
			nodoRow.appendChild(nodoBoton);

			nodoCajas.appendChild(nodoRow);


			boton.addEventListener("click", (function(tId, bId){
				return function(){
					alert(document.getElementById(tId).value);
				}
				
			}
			)("cajaId"+i, "botonId"+i),false);

			/*
			function getCaja() {
				var caja = document.getElementById("cajaId"+i)

				console.log(caja);

				alert(caja.value);
			}
			*/
		}


	}

}