import { hello, removeSNames, total } from './App';

// describe('hello', () => {
//   // what IT should do
//   it('should output hello', () => {
//     expect(hello()).toBe('Hello');
//   });
// });

// describe('add', () => {
//   // you can have different test cases, if one fails IT should fail
//   it('should add two numbers', () => {
//     expect(add(1,2)).toBe(3);
//     expect(add(2,2)).toBe(4);
//     expect(add(12,2)).toBe(14);
//     expect(add(-2,2)).toBe(0);
//     expect(add(-2,-2)).toBe(-4);
//   });
//   it('should not add strings', () => {
//     expect(add(2, "2")).toBe(null);
//   });
//   it('should not add objects', () => {
//     expect(add(2, {})).toBe(null);
//   });
//   it('should not add arrays', () => {
//     expect(add(2, [])).toBe(null);
//   });
// });

// describe('removeSNames', () => {
//   it('should remove all s names', () => {
//     const names = ['Scott', 'Courtney', 'Steve']
//     expect(removeSNames(names)).not.toContain('Scott');
//     expect(removeSNames(names)).not.toContain('Steve');
//   });
//   it('should not remove other names', () => {
//     const names = ['Scott', 'Courtney', 'Wes']
//     expect(removeSNames(names)).toContain('Courtney');
//     expect(removeSNames(names)).toContain('Wes');
//   });
//   it('should account for upper and lower cases', () => {
//     const names = ['Scott', 'Courtney', 'Wes', 'scott']
//     expect(removeSNames(names)).not.toContain('Scott');
//     expect(removeSNames(names)).not.toContain('scott');
//   });
// })

// ----- React testing for beginners -----

// MOCK FUNTIONS
// useful when we don't have access to the real function
const add = jest.fn(() => 3);
// UNIT TEST
// it only tests one thing
test('add', () => {
	expect(add(1, 2)).toBe(3);
	expect(add).toBeDefined();
	expect(add).toHaveBeenCalledTimes(1);
	expect(add).toHaveBeenCalledWith(1, 2);
});

// INTEGRATION TEST
// a function relying on another function, test things working together
// test('total', () => {
// 	expect(total(5, 20)).toBe('$25');
// });
