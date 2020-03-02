const parse = require('csv-parse')
const fs = require('fs');
const output = []
let csvFile = 'Data/WorldCitiesShortList.csv';
fs.createReadStream(csvFile)
    .pipe(parse({
    delimiter: ',',
    trim: true,
    skip_empty_lines: true
})
    .on('readable', function(){
        let record
        while (record = this.read()) {
            output.push(record)
        }
    })
    // When we are done, test that the parsed output matched what expected
    .on('end', function(){

        console.log(output);

    }));