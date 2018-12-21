import { hello } from './App';

describe('hello', () => {
  // what IT should do
  it('should output hello', () => {
    expect(hello()).toBe('Hello');
  })  
});