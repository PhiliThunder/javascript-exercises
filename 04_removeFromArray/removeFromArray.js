const removeFromArray = function(array, ...remove) {
    let filteredArray = array;
    for (const value of remove) {                                     
        filteredArray = filteredArray.filter(item => item !== value);
    }
    return filteredArray;
    /*
    Could have simply used includes() instead of the custom loop, something like this:
    return array.filter(val => !remove.includes(val))
    */
};

// Do not edit below this line
module.exports = removeFromArray;
