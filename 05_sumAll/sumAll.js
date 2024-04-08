const sumAll = function(num1, num2) {
    let sum = num1 + num2;
    let difference = num2 - num1;
    for (let i = difference; i > num1; i--) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
