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
    /*
    Could have been done in one line like this: return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    - No designated variable needed as the result of the expression will return true or false by itself.
    - All logic checks can be done in one line using parantheses.
    */
};

// Do not edit below this line
module.exports = leapYears;
