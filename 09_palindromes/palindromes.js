const palindromes = function (string) {
    const proccessed = string.toLowerCase().split(" ").join("").split("");
    const filtered = proccessed.filter(symbol => symbol != "," && symbol != "!" && symbol != ".");
    const processedOriginal = filtered.join("");
    const reversedResult = filtered.reverse().join("");
    if (reversedResult == processedOriginal) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
