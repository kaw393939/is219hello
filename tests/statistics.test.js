const Statistics = require('../Statistics');
const expect = require("expect");

test('calculating mean', () => {
    let a = [1,2];
    let Stat = new Statistics();
    let mean = Stat.Mean(a);

    expect(mean).toBe(1.5);
});
