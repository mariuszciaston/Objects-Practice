// Initialize a constructor function for a new Hero
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
	return `${this.name} says hello.`;
};

// Now we can create a new instance with new.
let hero0 = new Hero('Bjorn', 0);

console.log(hero0);
console.log(Object.getPrototypeOf(hero0));
console.log(hero0.greet());
console.log('-----------');

//----------------------------------------------------

// Initialize constructor functions
function Hero(name, level) {
	this.name = name;
	this.level = level;
  }
  
  function Warrior(name, level, weapon) {
	Hero.call(this, name, level);
  
	this.weapon = weapon;
  }
  
  function Healer(name, level, spell) {
	Hero.call(this, name, level);
  
	this.spell = spell;
  }
  
  // Link prototypes and add prototype methods
  Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
  Object.setPrototypeOf(Healer.prototype, Hero.prototype);
  
  Hero.prototype.greet = function () {
	return `${this.name} says hello.`;
  }
  
  Warrior.prototype.attack = function () {
	return `${this.name} attacks with the ${this.weapon}.`;
  }
  
  Healer.prototype.heal = function () {
	return `${this.name} casts ${this.spell}.`;
  }
  
  // Initialize individual character instances
  const hero1 = new Warrior('Bjorn', 1, 'axe');
  const hero2 = new Healer('Kanin', 1, 'cure');