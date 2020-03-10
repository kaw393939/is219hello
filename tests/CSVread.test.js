const CSVRead = require('../CSV/Read');
const City = require('../Models/City')
const expect = require('expect');
test('Can Read CSV File', () => {
    let filename  = 'Data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});