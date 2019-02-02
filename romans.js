const NUMBERS_TO_ROMANS = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
};

module.exports = number => NUMBERS_TO_ROMANS[number];
