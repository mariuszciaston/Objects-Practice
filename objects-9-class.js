class Media {
	constructor(type, name, author) {
		this.type = type;
		this.name = name;
		this.author = author;
	}

	getFullName() {
		return `${this.name}, ${this.author}`;
	}
}

class Song extends Media {
	constructor(name, author) {
		super('song', name, author); // super odnosi się do konstruktora w klasie Media
	}
}

const song = new Song(`Arrival to Earth`, `Steve Jablonsky`);

console.log(song.getFullName());
console.log(song);

// ---------------------------------------------------------------------

class Car {
	static numberOfCars = 0;

	static beginRace() {
		console.log('The race has begun!');
	}

	constructor(model) {
		this.model = model;
		Car.numberOfCars += 1;
	}
}

let car1 = new Car('Mustang');
let car2 = new Car('Corvette');
let car3 = new Car('Challanger');

console.log(Car.numberOfCars);
Car.beginRace()

// static = a method or property that belongs to a class and not any one object