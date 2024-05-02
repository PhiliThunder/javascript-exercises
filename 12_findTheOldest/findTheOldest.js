const findTheOldest = function (arr) {
    return arr.reduce((highObj, currObj) => {
        if (!currObj.yearOfDeath) { currObj.yearOfDeath = new Date().getFullYear() }
        return (currObj.yearOfDeath - currObj.yearOfBirth) > (highObj.yearOfDeath - highObj.yearOfBirth)
            ? currObj : highObj;
    }, arr[0]);//initialValue has to be specified so the !yearOfDeath check gets done on the first object of the array. (i believe)
               //Otherwise highObj is just going to be set to arr[0] without running that arr element through the reduction function first.
};

// Do not edit below this line
module.exports = findTheOldest;
new Date().getFullYear()