const Calculator = require('../src/Calculator');

test('Calculator divide 2 by  2 to equal 1', () => {
    let calc = new Calculator();
    let result = calc.Divide(2,2);
    expect(result).toBe(1);
    expect(calc.Result).toBe(1);

});
test('Calculator Add 2 by  2 to equal 4', () => {
    let calc = new Calculator();
    expect(calc.Sum(2, 3)).toBe(5);
    expect(calc.Result).toBe(5);

});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.Multiply(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});

test('Calculator add array of 1,2,3,4 and get result 10', () => {
    let calc = new Calculator();
    let myArray = [1,2,3,4]
    expect(calc.Sum(myArray)).toBe(10);
    expect(calc.Result).toBe(10);

});