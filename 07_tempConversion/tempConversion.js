const convertToCelsius = function(fahrenheit) {
  let toCelsius = ((fahrenheit - 32) * (5 / 9));
  return Math.round(toCelsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let toFahrenheit = (celsius * (9 / 5) + 32);
  return Math.round(toFahrenheit * 10) / 10;
};
/*Review:
The conversions could have been done in one line,
without the extra varibles, however i found it to be
more readable and nicer like this.

Parantheses are really important to put in the right places when using such functions and formulas.
*/
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
