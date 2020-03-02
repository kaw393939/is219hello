const parse = require('csv-parse')

const output = []
parse(`
  "1","2","3"
  "a","b","c"
`, {
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

    })