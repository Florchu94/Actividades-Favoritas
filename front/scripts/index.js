//Define una actividad con las propiedades () que se inicializan a través del constructor.
class Activity {
	constructor(id, title, description, imgURL) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.imgURL = imgURL;
	}
}

//Esta clase almacena las actividades
class Repository {
	constructor() {
		this.activities = [];
		this.currentId = 1;
	}

	createActivity(title, description, imgURL) {
		const newActivity = new Activity(
			this.currentId,
			title,
			description,
			imgURL
		);
		this.activities.push(newActivity);

		this.currentId++;
	}

	// Retorna todas las actividades
	getAllActivities() {
		return this.activities;
	}

	// Eliminar actividad por id
	deleteActivity(id) {
		this.activities = this.activities.filter((activity) => activity.id !== id);
	}
}

const repository = new Repository(); // Instancia única de Repository

/*
Al apretar el boton de "agregar actividad":
1- Tomar datos de los inputs para utilizarlos en el metodo createActivity
1.1 Seleccionar inputs
1.2 Guardar los contenidos en variables
1.3 Llamar al método createActivitiy pasando los argumentos

2. Refrescar el contenedor de actividades:
2.1 Seleccionarlo
2.2 Vaciarlo
2.3 Crear una tarjeta por medio de una funcion que reciba cada actividad
2.4 Llena el contenedor con las tarjetas de actividades
*/

// Tomar los inputs para utilizar el método createActivity:
const ActivitiesToCards = ({ id, title, description, imgURL }) => {
	// Crear los elementos HTML
	const cardTitle = document.createElement('h3');
	const cardDescription = document.createElement('p');
	const cardImage = document.createElement('img');
	const cardContainer = document.createElement('div');

	// Asignar los valores correspondientes
	cardTitle.textContent = title;
	cardDescription.textContent = description;
	cardImage.src = imgURL;

	cardContainer.classList.add('divContainerCards');
	cardContainer.setAttribute('data-id', id);

	// Añadir los elementos a la tarjeta
	cardContainer.appendChild(cardTitle);
	cardContainer.appendChild(cardImage);
	cardContainer.appendChild(cardDescription);

	// Añadir evento de doble clic para eliminar la tarjeta
	cardContainer.addEventListener('dblclick', () => {
		cardContainer.remove(); // Elimina la tarjeta del DOM
		repository.deleteActivity(id); // Elimina la tarjeta del repositorio
	});

	return cardContainer;
};

const addToDOM = () => {
	// Seleccionar el contenedor
	const containerCards = document.getElementById('divContainerCards');

	// Vaciar el contenedor
	containerCards.innerHTML = '';

	// Convertir las actividades en tarjetas
	const allActivities = repository.getAllActivities();
	const allElements = allActivities.map(ActivitiesToCards);

	//Que uno por uno se vayan appendeando los elementos child para renderizarlos

	allElements.forEach((element) => {
		containerCards.appendChild(element);
	});
};

addToDOM();

const handleSubmit = (event) => {
	event.preventDefault();

	// Seleccionar inputs y guardar sus contenidos en variables
	const form = document.getElementById('form');
	const inputTitle = document.getElementById('title').value;
	const textArea = document.getElementById('description').value;
	const inputImage = document.getElementById('image').value;

	// Validar que no falten datos
	if (!inputTitle || !inputImage || !textArea) {
		return alert('Faltan datos!');
	}

	// Llamar al método createActivity pasando los argumentos
	repository.createActivity(inputTitle, textArea, inputImage);

	addToDOM();

	// Limpiar el form
	form.reset();
};

// Seleccionamos el elemento del botón de submit
const btnSubmit = document.getElementById('addButton');

// Agregamos el event listener
btnSubmit.addEventListener('click', handleSubmit);

//module.export = { Activity, Repository }
