// console.log(this); // window in browser console // {} in node
// //------------
// (function test() {
// 	console.log(this); // window in browser console // global in node
// })();
// //------------
// const testowy1 = {
// 	test: console.log(this), // window in browser console // {} in node
// };
// //------------
// const testowy2 = {
// 	name: 'Agnieszka',
// 	showName() {
// 		console.log(this.name); // Agnieszka
// 	},
// };
// testowy2.showName(); // kontekstem jest dany obiekt
// //------------
// const testowy3 = {
// 	name: 'Karolina',
// 	showName: () => {
// 		// funkcja strzałkowa nie nadaje kontekstu
// 		console.log(this.name); // undefined
// 	},
// };
// testowy3.showName();

// //----------------------------------------------------

// const person1 = {
// 	name: 'Tom',
// 	showName: function () {
// 		console.log(this.name);
// 	},
// };

// person1.showName();

// //-----------------

// const person2 = {
// 	name: 'John',
// 	showName() {
// 		console.log(this.name);
// 	},
// 	address: {
// 		city: 'Warsaw',
// 		street: 'Złota',
// 		showAddress() {
// 			console.log(`${this.city}, ${this.street}`);
// 		},
// 	},
// };
// person2.showName();
// person2.address.showAddress();

// //-----------------

// const person3 = {
// 	name: 'Mark',
// 	showName() {
// 		console.log(this.name);
// 	},
// 	address: {
// 		city: 'Lódź',
// 		street: 'Batorego',
// 		log: console.log(this), // window in browser // {} in node

// 		showAddress: () => {
// 			console.log(this); // window in browser // {} in node
// 		},
// 	},
// };

// person3.showName();
// person3.address.showAddress();

// //-----------------

// const person4 = {
// 	name: 'Laura',
// 	showName() {
// 		const logName = function () {
// 			console.log(this); // window in browser // object [global] in node
// 		};
// 		logName();
// 	},
// };

// person4.showName();

// //-----------------

const Cat = function (name) {
	this.name = name;
};

Cat.prototype.showThisCat = function () {
	console.log(this);
};

const cat1 = new Cat('Mruczek');
const cat2 = new Cat('Miałczek');
const cat3 = new Cat('Skoczek');

cat1.showThisCat();
cat2.showThisCat();
cat3.showThisCat();

let cat4 = {
	name: 'Pazurek',
	showName() {
		console.log(this.name);
	},
};

cat4.showName();
