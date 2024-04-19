const sumAll = function (initial, final) {
    let isInitialNum = typeof (1) === typeof (initial);
    let isFinalNum = typeof (1) === typeof (final);
    if (initial < 0 || final < 0 || !isInitialNum || !isFinalNum) {
        return "ERROR";
    }
    let sum = 0;
    let [start, end] = initial < final ? [initial, final] : [final, initial];
    while (start <= end) {
        sum += start;
        start++;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
