const City = require('../src/Models/City')

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('Can create a city object by factory', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});