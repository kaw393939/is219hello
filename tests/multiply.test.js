const multiply = require('../src/Operations/Multiply');

test('multiplies 3 x 3 to equal 9', () => {
    expect(multiply(3, 3)).toBe(9);
});