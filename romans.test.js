const romans = require('./romans.js');

test('converts 1 to I', () => {
  const decimal = 1;
  expect(romans(decimal)).toBe('I');
});
