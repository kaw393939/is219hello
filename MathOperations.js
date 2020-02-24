const addition = require('./addition');
const multiply = require('./multiply');
const divide = require('./divide');
const difference = require('./subtraction');

class MathOperations {
    static sum(a = null, b = null) {
        if(Array.isArray(a)) {
            return addition.sum(a);
        } else {
            return addition.sum(a,b);
        }
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
    static difference(a,b) {
        return difference.difference(a,b);
    }
}

module.exports = MathOperations;