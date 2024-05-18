const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  const sumofarr = arr.reduce((total, arrElement) => {
    return total + arrElement;
  }, 0);
  return sumofarr;
};

const multiply = function (arr) {
  const proofarr = arr.reduce((total, arrElement) => {
    return total * arrElement;
  }, 1);
  return proofarr;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }
  product = 1;
  for (i = num; i > 1; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
