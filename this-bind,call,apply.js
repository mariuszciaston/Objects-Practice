// call() ----------------------------------------------

const human = {
	name: 'Monika',
	sayName() {
		console.log(`My name is ${this.name}`);
	},
	sayFullName: function (surname) {
		console.log(`My name is ${this.name} ${surname}`);
	},

	sayAll: function (surname, age) {
		console.log(`My name is ${this.name} ${surname}. I am ${age} years old.`);
	},
};

const personA = {
	name: 'Artur',
};

const personB = {
	name: 'John',
};

const personC = {
	name: 'Jessica',
};

// human.sayName.call(human);
// human.sayName.call(personA);
// human.sayName.call(personB);
const people = [human, personA, personB, personC];
people.forEach((p) => human.sayName.call(p));
console.log('-----------');

people.forEach((p) => human.sayFullName.call(p, ['Kowalski']));
console.log('-----------');

// apply() ----------------------------------------------
people.forEach((p) => human.sayAll.call(p, ['Smith'], [44]));
console.log('-----------');
people.forEach((p) => human.sayAll.apply(p, ['Smith', 44]));
console.log('-----------');

// bind() ----------------------------------------------
people.forEach((p) => {
	const binded = human.sayName.bind(p);
	binded();
});

// lub
console.log('---');

people.forEach((p) => {
	human.sayName.bind(p)();
});

console.log('-----------');
people.forEach((p) => {
	const binded = human.sayAll.bind(p, ['Nowak'], [23]);
	binded();
});
// lub
console.log('---');
people.forEach((p) => {
	human.sayAll.bind(p, ['Nowak'], [23])();
});

console.log('-----------');

human.sayName();
// human.sayName.call(human) the same as human.sayName();

human.sayName.call(personA);
human.sayName.apply(personB);

const binded = human.sayName.bind(personC);
binded();
// lub
human.sayName.bind(personC)();
