const MathOperations = require('./MathOperations');

class Calculator {
    Add(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.Result = MathOperations.sum(a);

        } else {
            return this.Result = MathOperations.sum(a, b);
        }
    }
    Divide(a,b) {
        return this.Result = MathOperations.quotient(a,b);
    }
    Multiply(a,b) {
        return this.Result = MathOperations.product(a,b);
    }
    Difference(a,b) {
        return this.Result = MathOperations.difference(a,b);
    }
}
module.exports = Calculator;