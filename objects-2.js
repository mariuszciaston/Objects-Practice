const person = {
	name: ['Bob', 'Smith'],
	age: 32,
	bio: function () {
		console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
	},
	introduceSelf: function () {
		console.log(`Hi! I'm ${this.name[0]}.`);
	},
};

console.log(person.name);
console.log(person.name[0]);
console.log(person.name[1]);
console.log(person.age);
person.bio(); // "Bob Smith is 32 years old."
person.introduceSelf(); // "Hi! I'm Bob."

//----------------------------------------------------

const person2 = {
	name: {
		first: 'Bob',
		last: 'Smith',
	},
	age: 32,
	bio() {
		console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
	},
	introduceSelf() {
		console.log(`Hi! I'm ${this.name.first}.`);
	},
};

console.log(person2.name);
console.log(person2.name.first);
console.log(person2.name.last);
console.log(person2.age);
person2.bio(); // "Bob Smith is 32 years old."
person2.introduceSelf(); // "Hi! I'm Bob."

//----------------------------------------------------

const person3 = {
	name: {
		first: 'Bob',
		last: 'Smith',
	},
	age: 32,
	bio() {
		console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
	},
	introduceSelf() {
		console.log(`Hi! I'm ${this.name.first}.`);
	},
};

console.log(person2.name);

console.log(person2.name['first']);
//lub
console.log(person2['name']['last']);

console.log(person2.age);
person2.bio(); // "Bob Smith is 32 years old."
person2.introduceSelf(); // "Hi! I'm Bob."

//----------------------------------------------------

const person4 = {
	name: ['Bob', 'Smith'],
	age: 32,
};

function logProperty(propertyName) {
	console.log(person4[propertyName]);
}

logProperty('name'); // ["Bob", "Smith"]
logProperty('age'); // 32

//----------------------------------------------------


person2.age = 45;
person2['name']['last'] = 'Cratchit';

console.log(person2.age);
console.log(person2['name']['last']); 


person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

console.log(person["eyes"]);
person.farewell(); // "Bye everybody!"

//----------------------------------------------------

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

console.log(person.height);
