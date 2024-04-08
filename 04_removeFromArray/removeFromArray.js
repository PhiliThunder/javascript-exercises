const removeFromArray = function(array, ...remove) {
    let filteredArray = array;
    for (const value of remove) {
        filteredArray = filteredArray.filter(item => item !== value);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
