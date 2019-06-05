var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.rename('myNewFile.txt', 'myNewFile2.txt', function (err) {
  if (err) throw err;
  console.log('File renamed!');
});
