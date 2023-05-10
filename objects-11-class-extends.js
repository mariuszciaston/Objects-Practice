class DateFormatter extends Date {
	getFormattedDate() {
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
	}
}

console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// Expected output: "19-Aug-1975"

// -------------------------------------------------------

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	welcome() {
		console.log('Hello', this.name);
		console.log('You are', this.age, 'years old');
	}
}

class Student extends Person {
	constructor(name, age, gpa) {
		super(name, age);
		this.gpa = gpa;
	}

	hello() {
		super.welcome();
		console.log('Your gpa is', this.gpa);
	}
}

class Teacher extends Person {
	constructor(name, age, classSize) {
		super(name, age);
		this.classSize = classSize;
	}

	hello() {
		super.welcome();
		console.log('Your class size', this.classSize);
	}
}

let student = new Student('Steve', 21, 2.0);
let teacher = new Teacher('Bob', 45, 30);

student.hello();
teacher.hello();
