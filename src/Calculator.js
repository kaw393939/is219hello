const MathOperations = require('./Operations/MathOperations');

class Calculator {
    Sum(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.Result = MathOperations.Sum(a);

        } else {
            return this.Result = MathOperations.Sum(a, b);
        }
    }
    Divide(a,b) {
        return this.Result = MathOperations.Quotient(a,b);
    }
    Multiply(a,b) {
        return this.Result = MathOperations.Product(a,b);
    }
    Difference(a,b) {
        return this.Result = MathOperations.Difference(a,b);
    }
}
module.exports = Calculator;