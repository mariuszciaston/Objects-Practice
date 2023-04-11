const cat = {
	name: 'Bertie',
	breed: 'Cymric',
	color: 'white',
	greeting: function () {
		console.log('Meow!');
	},
};

// Add your code here
let catName = cat['name']; // Bertie
cat.greeting();
cat.color = 'black';
console.log(cat.color);

//----------------------------------------------------

const dog = {
	name: 'John',
	breed: 'Reksio',
	color: 'brown',
	greeting: function () {
		console.log(`Hello, said ${this.name} the ${this.breed}`);
	},
};

const dog2 = {
	name: 'Martin',
	breed: 'Dachowiec',
	color: 'pink',
	greeting: function () {
		console.log(`Hello, said ${this.name} the ${this.breed}`);
	},
};

let dogName = dog['name']; // John
dog.greeting();
dog.color = 'black';
console.log(dog.color);

let dogName2 = dog['name']; // Martin
dog2.greeting();
dog.color = 'black';
console.log(dog.color);

//----------------------------------------------------

function Cat(name, breed, color) {
	this.name = name;
	this.breed = breed;
	this.color = color;
	this.greeting = function () {
		console.log(`Hello, said ${this.name} the ${this.breed}.`);
	};
}

const cat2 = new Cat('Bertie', 'Cymric', 'white');
const cat3 = new Cat('Elfie', 'Aphrodite Giant', 'ginger');

cat2.greeting();
cat3.greeting();

//----------------------------------------------------

const favBrands = {
	name: 'Cold peppers',
	nationality: 'Belgium',
	genere: 'Soft metal',
	members: 4,
	formed: 1998,
	split: false,
	albums: [
		{
			name: 'Album 1',
			released: 2020,
		},
		{
			name: 'Album 2',
			released: 2021,
		},
	],
	'multi word key': 'value',
};

bandInfo =
	"Once you've done this, you should then write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.";

console.log(favBrands.name);
console.log(favBrands.nationality);
console.log(favBrands.genere);
console.log(favBrands.members);
console.log(favBrands.formed);
console.log(favBrands.split);
console.log(favBrands.albums);
console.log(favBrands.albums[0]);
console.log(favBrands.albums[1]);
console.log(favBrands.albums[0].name);
console.log(favBrands.albums[0].released);
console.log(favBrands.albums[1].name);
console.log(favBrands.albums[1].released);

console.log(favBrands['name']);
console.log(favBrands['nationality']);
console.log(favBrands['genere']);
console.log(favBrands['members']);
console.log(favBrands['formed']);
console.log(favBrands['split']);
console.log(favBrands['albums']);
console.log(favBrands['albums'][0]);
console.log(favBrands['albums'][1]);
console.log(favBrands['albums'][0]['name']);
console.log(favBrands['albums'][0]['released']);
console.log(favBrands['albums'][1]['name']);
console.log(favBrands['albums'][1]['released']);

console.log(favBrands['multi word key']);

//----------------------------------------------------
