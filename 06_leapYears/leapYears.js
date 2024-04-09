const leapYears = function(year) {
    let isLeapYear = false;
    if (year % 400 === 0) {
        isLeapYear = true
        return isLeapYear;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        isLeapYear = true;
        return isLeapYear;
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
