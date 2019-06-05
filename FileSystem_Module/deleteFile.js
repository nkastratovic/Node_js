var fs = require('fs');

//create a file named mynewfile1.txt:
fs.unlink('mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('Deleted file!');
});
