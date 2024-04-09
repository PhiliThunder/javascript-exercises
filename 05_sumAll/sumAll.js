const sumAll = function (num1, num2) {
    let sum = num1 + num2;
    let difference = 0;
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (num1 < num2) {
        difference = num2 - num1;
        for (let i = difference; i > num1; i--) {
            sum += i;
        }
    } else {
        difference = num1 - num2;
        for (let i = difference; i > num2; i--) {
            sum += i;
        }
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
