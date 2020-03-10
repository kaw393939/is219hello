const CSVRead = require('../CSV/Read');
const City = require('../Models/City')
test('Can Read CSV File', () => {
    let filename  = 'Data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
   console.log(records);
});