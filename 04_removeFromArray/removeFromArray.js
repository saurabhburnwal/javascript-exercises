const removeFromArray = function(arr) {
    const removed = Array.from(arguments);
    for (rem of removed) { 
        const index = arr.indexOf(rem);
        if (index > -1)
        arr.splice(index, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
