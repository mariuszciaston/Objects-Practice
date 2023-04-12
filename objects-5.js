const myObject = {
	property: 'Value!',
	otherProperty: 77,
	'obnoxious property': function () {
		// do stuff!
	},
};

// dot notation
console.log(myObject.property); // 'Value!'

// bracket notation
console.log(myObject['obnoxious property']); // [Function] 

const variable = 'property';
console.log(myObject.variable); // this gives us 'undefined' because it's looking for a property named 'variable' in our object
console.log(myObject[variable]); // this is equivalent to myObject['property'] and returns 'Value!'

//----------------------------------------------------

// example one
const playerOneName = 'tim';
const playerTwoName = 'jenn';
const playerOneMarker = 'X';
const playerTwoMarker = 'O';

console.log(playerOneName);
console.log(playerTwoName);

// example two
const playerOne = {
	name: 'tim',
	marker: 'X',
};

const playerTwo = {
	name: 'jenn',
	marker: 'O',
};

function printName(player) {
	console.log(player.name);
}

function gameOver(winningPlayer) {
	console.log('Congratulations!');
	console.log(winningPlayer.name + ' is the winner!');
}

//----------------------------------------------------

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	};
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

