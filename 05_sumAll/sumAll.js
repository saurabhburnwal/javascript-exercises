const sumAll = function(min, max) {
    if (min < 0 || max < 0 ||
        !Number.isInteger(min) ||
        !Number.isInteger(max))
            return 'ERROR';
    if (min > max)  [min, max] = [max, min];
    const startSum = (min * (min - 1)) / 2;
    const endSum = (max * (max + 1)) / 2;
    return endSum - startSum;
};

// Do not edit below this line
module.exports = sumAll;
