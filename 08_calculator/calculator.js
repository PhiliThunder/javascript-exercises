const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => num + sum, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, num) => num * sum);
};

const power = function(base, power) {
  return base ** power;
};

const factorial = function(num) {
  if (num == 0) {return 1};
	for (let i = num - 1; i > 0; i--) { //Could have added a result variable and made it a bit nicer
    num = num * i;
  }
  return num
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
