const removeFromArray = function(array, remove, remove2, remove3, remove4) {
    return array.filter(item => item !== remove 
        && item !== remove2 
        && item !== remove3 
        && item !== remove4);
};

// Do not edit below this line
module.exports = removeFromArray;
