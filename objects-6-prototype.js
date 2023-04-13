function Student(name, grade) {
	this.name = name;
	this.grade = grade;
}

Student.prototype.sayName = function () {
	console.log(this.name);
};
Student.prototype.goToProm = function () {
	console.log('Eh.. go to prom?');
};

const student1 = new Student('John', 'A');

student1;
console.log(student1.name);
console.log(student1.grade);

student1.sayName();
student1.goToProm();

//----------------------------------------------------
console.log('------------------');

function Student2() {}

Student2.prototype.sayName = function () {
	console.log(this.name);
};

function EighthGrader(name) {
	this.name = name;
	this.grade = 8;
}

EighthGrader.prototype = Object.create(Student2.prototype);

const carl = new EighthGrader('carl');
console.log(carl.grade); // 8
carl.sayName(); // carl

//----------------------------------------------------
console.log('------------------');

function Student3() {}

Student3.prototype.sayName = function () {
	console.log(this.name);
};

function EighthGrader2(name) {
	this.name = name;
	this.grade = 8;
}

// don't do this!!!
EighthGrader2.prototype = Student3.prototype;

function NinthGrader(name) {
	this.name = name;
	this.grade = 9;
}

// noooo! not again!
NinthGrader.prototype = Student3.prototype;

NinthGrader.prototype.sayName = function () {
	console.log('HAHAHAHAHAHA');
};

const carl2 = new EighthGrader2('carl');
carl2.sayName(); //uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
