function createPerson(name) {
	const obj = {};
	obj.name = name;
	obj.introduceSelf = function () {
		console.log(`Hi! I'm ${this.name}.`);
	};
	return obj;
}

const salva = createPerson('Salva');
salva.name; // Salva
salva.introduceSelf(); // "Hi! I'm Salva."

const frankie = createPerson('Frankie');
frankie.name; // Frankie
frankie.introduceSelf(); // "Hi! I'm Frankie."

//----------------------------------------------------

function Person(name) {
	this.name = name;
	this.introduceSelf = function () {
		console.log(`Hi! I'm ${this.name}.`);
	};
}

const salva2 = new Person('Salva2');
salva2.name; // Salva2
salva2.introduceSelf(); // "Hi! I'm Salva2."

const frankie2 = new Person('Frankie2');
frankie2.name; // Salva2
frankie2.introduceSelf(); // "Hi! I'm Frankie2."