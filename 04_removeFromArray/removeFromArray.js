const removeFromArray = function(array, ...elem) {
    let index;
    for (i = 0; i < elem.length; i++) {
        index = array.indexOf(elem[i]);
        if (index >= 0) array.splice(index, 1);
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
