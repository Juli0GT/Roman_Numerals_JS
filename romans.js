const NUMBERS_TO_ROMANS = [
  {
    decimal: 500,
    roman: 'D',
  },
  {
    decimal: 400,
    roman: 'CD',
  },
  {
    decimal: 100,
    roman: 'C',
  },
  {
    decimal: 90,
    roman: 'XC',
  },
  {
    decimal: 50,
    roman: 'L',
  },
  {
    decimal: 40,
    roman: 'XL',
  },
  {
    decimal: 10,
    roman: 'X',
  },
  {
    decimal: 9,
    roman: 'IX',
  },
  {
    decimal: 5,
    roman: 'V',
  },
  {
    decimal: 4,
    roman: 'IV',
  },
  {
    decimal: 1,
    roman: 'I',
  },
];

const convertToRoman = (number) => {
  let rest = number;
  let romanNumeral = '';

  NUMBERS_TO_ROMANS.forEach((value) => {
    while (rest >= value.decimal) {
      romanNumeral += value.roman;
      rest -= value.decimal;
    }
  });
  console.log(romanNumeral);
  return romanNumeral;
};


module.exports = convertToRoman;
