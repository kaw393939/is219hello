const sum = require('./sum');
const multiply = require('./multiply');
const divide = require('./divide');

class MathOperations {
    static sum(a,b) {
        return sum(a,b);
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
}

module.exports = MathOperations;