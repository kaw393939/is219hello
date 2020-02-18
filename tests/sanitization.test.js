const sanitization = require('../sanitization');
const expect = require("expect");



test('check if a variable is not a string', () => {
    let a = 1;
    expect(sanitization.checkIfString(a)).toBeFalsy();
});

test('check if a string variable throws an error exception', () => {

    let a = "test";

    expect(() => sanitization.checkIfString(a)).toThrow();

});