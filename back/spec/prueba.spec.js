const { Activity, Repository } = require("../scripts/index")


// ToDoList

// - Debe ser una clase
// - Debe tener los metodos:
//      - getTodos(): debe retornar la lista de tareas
//      - addTodo(): deberia pushear al array una tarea nueva
//      - deleteTodo(): deberia eliminar la ultima tarea


describe('La clase TodoList', () => {
	it('Debe ser una clase', () => {
		expect(typeof ToDoList.prototype.constructor).toBe('function');
	});
	
	it('Debe tener implementado el metodo getTodos()', () => {
		const lista = new ToDoList();
		expect(lista.addTodo).toBeDefined();
	});
	
	it('Debe tener implementado el metodo addTodo()', () => {
		const lista = new ToDoList();
		expect(lista.addTodo).toBeDefined();
	});
	
	it('Debe tener implementado el metodo deleteTodo()', () => {
		const lista = new ToDoList();
		expect(lista.deleteTodo).toBeDefined();
	});
	
	it('El metodo getTodos() debe retornar un array', () => {
		const lista = new ToDoList();
		expect(Arrray.isArray(lista.getTodos())).toBeTrue();
	});
	
	it('El metodo addTodo() debe agregar un nuevo elemento', () => {
		const lista = new ToDoList();
		lista.addTodo('Hacer la HW de la clase de hoy');
		expect(lista.getTodos()).toContain('Hacer la HW de la clase de hoy');
	});
	
	it('El metodo deleteTodo() debe eliminar la ultima Tarea', () => {
		const lista = new toDolist();
		
		lista.addTodo('A');
		lista.addTodo('B');
		lista.addTodo('C');
		expect(lista.getTodos()).toContain('A');
		expect(lista.getTodos()).toContain('B');
		expect(lista.getTodos()).not.toContain('C');
	});
	
});

//* Importando Clases *//

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
		this.activities = []
    	this.currentId = 1
	}
	
	createActivity(title, description, imgURL){
		const newActivity = new Activity (
			this.currentId,
			title,
			description,
			imgURL
		)
		this.activities.push(newActivity)
		
		this.currentId++
	}
	
	// Retorna todas las actividades
	getAllActivities() {
		return this.activities
	}
	
	// Eliminar actividad por id
	deleteActivity(id) {
		this.activities = this.activities.filter(activity => activity.id !== id);
	}
}

{const repository = new Repository()}


//const ToDoList = require("../scripts/index");