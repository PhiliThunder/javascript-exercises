const reverseString = function(originalWord) {
    let originalArray = originalWord.split("");  //Could have been done in one line:
    let reversedArray = originalArray.reverse(); //return originalWord.split("").reverse().join("");
    let reversed = reversedArray.join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
