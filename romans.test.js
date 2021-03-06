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

test('converts 3 to III', () => {
  const decimal = 3;
  expect(romans(decimal)).toBe('III');
});

test('converts 20 to XX', () => {
  const decimal = 20;
  expect(romans(decimal)).toBe('XX');
});

test('converts 55 to LV', () => {
  const decimal = 55;
  expect(romans(decimal)).toBe('LV');
});

test('converts 4 to IV', () => {
  const decimal = 4;
  expect(romans(decimal)).toBe('IV');
});

test('converts 9 to IX', () => {
  const decimal = 9;
  expect(romans(decimal)).toBe('IX');
});

test('converts 49 to XLIX', () => {
  const decimal = 49;
  expect(romans(decimal)).toBe('XLIX');
});

test('converts 94 to XCIV', () => {
  const decimal = 94;
  expect(romans(decimal)).toBe('XCIV');
});


test('converts 335 to CCCXXXV', () => {
  const decimal = 335;
  expect(romans(decimal)).toBe('CCCXXXV');
});

test('converts 478 to CDLXXVIII', () => {
  const decimal = 478;
  expect(romans(decimal)).toBe('CDLXXVIII');
});

test('converts 789 to DCCLXXXIX', () => {
  const decimal = 789;
  expect(romans(decimal)).toBe('DCCLXXXIX');
});

test('converter can not convert values equal or higher than 900', () => {
  const decimal = 900;
  expect(romans(decimal)).toBe('Sorry this converter can not convert such a big number');
});

test('converter can not convert values equal or lower than 0', () => {
  const decimal = 0;
  expect(romans(decimal)).toBe('Sorry this converter can not convert values lower than 1');
});
