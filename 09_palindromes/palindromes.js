const palindromes = function (string) {
    const proccessed = string.toLowerCase().split(" ").join("").split("");
    const filtered = proccessed.filter(symbol => symbol != "," && symbol != "!" && symbol != ".");
    //If i had created a varible with all valid characters, i could have just checked with .includes() within the .filter()
    //to remove not only these symbols but also spaces at the same time, meaning i also would not have had to do the unecessary .split and .join
    const processedOriginal = filtered.join("");
    const reversedResult = filtered.reverse().join("");
    if (reversedResult == processedOriginal) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
