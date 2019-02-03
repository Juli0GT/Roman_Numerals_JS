const NUMBERS_TO_ROMANS = [
  {
    decimal: 500,
    roman: 'D',
  },
  {
    decimal: 100,
    roman: 'C',
  },
  {
    decimal: 50,
    roman: 'L',
  },
  {
    decimal: 10,
    roman: 'X',
  },
  {
    decimal: 5,
    roman: 'V',
  },
  {
    decimal: 1,
    roman: 'I',
  },
];

module.exports = number => NUMBERS_TO_ROMANS[number];
