const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((multiple, current) => multiple * current);
};

const power = function (a, b) {
  let exp = 1;
  for (let i = 0; i < b; i++) {
    exp *= a;
  }
  return exp;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
