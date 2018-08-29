import React from 'react';
import App from './App';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<App />);
});

// function sum(a, b) {
//   return a + b;
// }

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
