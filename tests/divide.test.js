const divide = require('../src/Operations/Divide');

test('divide 2 divided by  2 to equal 1', () => {
    expect(divide(2, 2)).toBe(1);
});