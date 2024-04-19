const repeatString = (text, repeat) => {
    let combinedStrings = "";
    if (repeat < 0) {
        return "ERROR";
    }
    while (repeat) {
        combinedStrings += text;
        repeat--;
    }
    return combinedStrings;
};

// Do not edit below this line
module.exports = repeatString;
