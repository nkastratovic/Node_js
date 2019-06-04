var fs = require('fs');

//appent text and updat a file named mynewfile1.txt:
fs.appendFile('myNewFile.txt', 'Add text', function (err) {
  if (err) throw err;
  console.log('File updated!');
});
