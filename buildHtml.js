// copies src/index.html into /dist/index.html
// Allowing console calls below since this is a build file.
/*eslint-disable no-console */

var fs = require('fs');
var colors = require('colors');
var cheerio = require('cheerio');

fs.readFile('src/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var $ = cheerio.load(data);
  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) return console.log(err);
  });
  console.log('index.html written to /dist'.green);
});
