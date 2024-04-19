const reverseString = (string) => {
    let stringLength = string.length - 1;
    let reversedString = "";
    for (i = stringLength; i >= 0; i--) {
        reversedString += string.at(i);
    }
    return reversedString;
    // DECREMENT charcodeat until it reaches the 0 index
};

// Do not edit below this line
module.exports = reverseString;
