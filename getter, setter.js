const person1 = {
	firstName: 'Adam',
	lastName: 'Nowak',
};

console.log(`${person1.firstName} ${person1.lastName}`);

// ---------------------------------------------------------------

const person2 = {
	firstName: 'Marcin',
	lastName: 'Nowakowski',
	fullName() {
		return `${person2.firstName} ${person2.lastName}`;
	},
};

console.log(`${person2.firstName} ${person2.lastName}`);
console.log(person2.fullName());

// ---------------------------------------------------------------

const person3 = {
	firstName: 'Marcin',
	lastName: 'Nowakowski',
	get fullName() {
		return `${person3.firstName} ${person3.lastName}`;
	},
	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	},
};

person3.fullName = 'Wojciech Burak';

console.log(person3.fullName);

// ---------------------------------------------------------------

function User(name, birthday) {
	this.name = name;
	this.birthday = birthday;

	// age is calculated from the current date and birthday
	Object.defineProperty(this, 'age', {
		get() {
			const todayYear = new Date().getFullYear();
			return todayYear - this.birthday.getFullYear();
		},
	});
}

const john = new User('John', new Date(1992, 6, 1));

console.log(john.birthday); // birthday is available
console.log(john.age); // ...as well as the age

// ---------------------------------------------------------------

class User2 {
	constructor(name) {
		// invokes the setter
		this.name = name;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (value.length < 4) {
			console.log('Name is too short.');
			return;
		}
		this._name = value;
	}
}

let user = new User2('John');
console.log(user.name); // John

user = new User(''); // Name is too short.

// ---------------------------------------------------------------

class User3 {
	['say' + 'Hi']() {
		console.log('Hello');
	}
}

new User3().sayHi();

// ---------------------------------------------------------------
