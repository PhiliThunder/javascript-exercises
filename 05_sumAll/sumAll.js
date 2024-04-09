const sumAll = function (num1, num2) {
    let sum = num1 + num2;
    let difference = 0;
    if (typeof(num1) !== "number" || typeof(num2) !== "number") { //Could have used !Number.isInteger() here
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
    /*
    Instead of having several else if's, i could have just had one-line error IF-checks.
    Also i could have designated the number parameters to be smallest and largest number
    and just swapping the numbers if form the input that is not the case, enabling having just one for loop.
    */
}

// Do not edit below this line
module.exports = sumAll;
