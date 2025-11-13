/* JS
Necesitamos: nombre, imagen, tipo, altura y peso:
Nombre: name
Imagen: .sprites.other['official-artwork'].front_default
Tipo: types[0].type.name
Peso: weight
Altura: height



*/
console.log('Hola')
let pokemon = document.getElementById('pokemon-select').value




const boton = document.getElementById('get-pokemon');
const card = document.getElementById('card');


boton.addEventListener('click', () => {
    let pokemon = document.getElementById('pokemon-select').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
	.then((response) => {
		if(!response.ok) {
			throw new Error (`La solicitud no fue exitosa: ${response.status}`);
		}
		return response.json();
	})
	.then((data) => {
    let template = `
     <div class="contenedor">
    <img src=${data.sprites.other['official-artwork'].front_default} alt="${data.name}" />
     <p><strong>Nombre:</strong> ${data.name}</p>
     <p><strong>Tipo:</strong> ${data.types[0].type.name}</p>
     <p><strong>Altura:</strong> ${data.height}</p>
     <p><strong>Peso:</strong> ${data.weight}</p>
     </div>
     `
     card.innerHTML = template;  	
	})
	.catch((error) => {
	
	})
    
})
