const Calculator = require('./MathOperations');
a = 1;
b = 2;

sum = Calculator.sum(a,b);
product = Calculator.product(a,b);
quotient = Calculator.quotient(a,b);

console.log("The sum is: " + sum);
console.log("The product is: " + product);
console.log("The quotient is: " + quotient);