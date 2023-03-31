let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// -----------------------------------

function isEmpty(schedule) {
	for (let key in schedule) {
		return false;
	}
	return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule));

// -----------------------------------

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function total(salaries) {
	let sum = 0;

	for (let key in salaries) {
		sum += salaries[key];
	}
	return sum;
}

console.log(total(salaries));

// -----------------------------------

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};
function multiplyNumeric(menu) {
	for (let key in menu) {
		if (typeof menu[key] === 'number') {
			menu[key] *= 2;
		}
	}
	return menu;
}

console.log(multiplyNumeric(menu));
