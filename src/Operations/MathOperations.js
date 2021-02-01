const addition = require('./Addition');
const multiply = require('./Multiply');
const divide = require('./Divide');
const difference = require('./Subtraction');

class MathOperations {
    static Sum(a = null, b = null) {
        if(Array.isArray(a)) {
            return addition(a);
        } else {
            return addition(a,b);
        }
    }
    static Product(a,b) {
        return multiply(a,b);
    }
    static Quotient(a,b) {
        return divide(a,b);
    }
    static Difference(a,b) {
        return difference(a,b);
    }
}

module.exports = MathOperations;