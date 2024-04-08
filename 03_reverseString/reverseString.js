const reverseString = function(originalWord) {
    let originalArray = originalWord.split("");
    let reversedArray = originalArray.reverse();
    let reversed = reversedArray.join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
