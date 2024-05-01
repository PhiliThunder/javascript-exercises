const fibonacci = function(num) {
    fiboNum = Number(num);
    if (fiboNum == 0) {return 0};
    if (fiboNum < 0) {return "OOPS"};
    if (fiboNum == 1) {return 1};
    let firstNum = 0;
    let secondNum = 1;
    let result = firstNum + secondNum;
    for (let i = 2; i <= fiboNum; i++) {
        result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
