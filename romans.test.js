const romans = require('./romans.js');

test('converts 1 to I', () => {
  const decimal = 1;
  expect(romans(decimal)).toBe('I');
});

test('converts 5 to V', () => {
  const decimal = 5;
  expect(romans(decimal)).toBe('V');
});

test('converts 10 to X', () => {
  const decimal = 10;
  expect(romans(decimal)).toBe('X');
});

test('converts 50 to L', () => {
  const decimal = 50;
  expect(romans(decimal)).toBe('L');
});

test('converts 100 to C', () => {
  const decimal = 100;
  expect(romans(decimal)).toBe('C');
});

test('converts 500 to D', () => {
  const decimal = 500;
  expect(romans(decimal)).toBe('D');
});
