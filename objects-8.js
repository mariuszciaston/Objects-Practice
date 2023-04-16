function Dog(name, breed, color) {
	this.name = name;
	this.breed = breed;
	this.color = color;
	this.bark = function () {
		return 'Woof!';
	};
}

console.log(Dog);
console.log(Dog.prototype);
console.log(Dog.prototype.constructor);

console.log('-------------------------');

const dog1 = new Dog('Daisy', 'Labrador', 'black');
const dog2 = new Dog('Jack', 'Jack Russell', 'white');

console.log('-------------------------');

function Dog2(name, breed, color) {
	this.name = name;
	this.breed = breed;
	this.color = color;
}

Dog2.prototype.bark = function () {
	return 'Woof!';
};

// THE SAME AS

class Dog3 {
	constructor(name, breed, color) {
		this.name = name;
		this.breed = breed;
		this.color = color;
	}
	bark() {
		return 'Woof!';
	}
}

console.log('-------------------------');

class Dog4 {
	constructor(name) {
		this.name = name;
	}
	bark() {
		return 'Woof!';
	}
}
class Chihuahua extends Dog4 {
	constructor(name) {
		super(name);
	}
	smallBark() {
		return 'Small woof!';
	}
}
const myPet = new Chihuahua('Max');
console.log(myPet.name);
console.log(myPet.bark());
console.log(myPet.smallBark());

console.log(Dog4.isPrototypeOf(Chihuahua));
console.log(myPet instanceof Dog4);

console.log('-------------------------');

const person = {
	name: 'Lydia',
	age: 25,
};

const me = Object.create(person);

console.log(me);

console.log('-------------------------');
