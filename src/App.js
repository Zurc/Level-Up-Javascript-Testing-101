export const hello = () => 'Hello';

export const add = (x, y) => {
	if (typeof x !== 'number' || typeof y !== 'number') {
		return null;
	}
	return x + y;
};

export const removeSNames = (names) => {
	// TDD approach, start with null, build the test and then write some code
	// return null;

	// initial idea, check that passes the tests
	// let newNames = names;
	// names.forEach(name => {
	//   if(name.toLowerCase().charAt(0) === 's') {
	//     // find the position
	//     const index = newNames.indexOf(name);
	//     newNames.splice(index, 1);
	//   }
	// })
	// return newNames;

	// new idea, refactoring Vue.config.keyCodes = {
	return names.filter((name) => name.toLowerCase().charAt(0) !== 's');
};

export const total = (shipping, subTotal) => {
	return '$' + add(shipping, subTotal);
};
