const sumAll = function(num1, num2) {
    let sum = null;
    if (num1 < 0 || num2 < 0 || typeof num1 === 'string' || typeof num2 === 'string' || isNaN(num1) || isNaN(num2)) {
        return "ERROR";
    } else if (num1 < num2) {
        for (i = num1; i <= num2; i++) {
            sum += i;
        }
    } else {
        for (i = num2; i <= num1; i++) {
            sum += i;
        }
    }
    
    return sum;
};
console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
