const removeFromArray = function (list, ...omittedArg) {
    const argLength = omittedArg.length;
    for (let i = 0; i < argLength; i++) {
        list = list.filter((list) => list !== omittedArg[i]);
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
