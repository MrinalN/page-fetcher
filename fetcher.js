const request = require('request');
const fs = require('fs');


const url = process.argv[2];
const fileRoute = process.argv[3];

const logFSResults = (err) => {
  if (err) throw err;

  fs.stat(fileRoute, (err, stats) => {
  if (err) {console.log(err.code)};
  console.log(`Downloaded and saved ${stats.size} bytes to ${fileRoute}.`);
  })
};

request(url, function (error, response, body) {
  if (error) {console.log('error:', error)};
  
  fs.writeFile(fileRoute, body, logFSResults);
});





// fs.writeFile('WHERE TO PUT IT', 'WHAT TO PUT THERE', WHEN DONEfunction (err) {
//   
// });



//WHAT I WANT: console.log(`Downloaded and saved ${1235} bytes to ${./index.html}.)
// SO we have to create and index.html and download....