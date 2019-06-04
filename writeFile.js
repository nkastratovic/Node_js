var fs = require('fs');

//create a file named mynewfile1.txt:
fs.writeFile('myNewFile.txt', 'Replaced content!', function (err) {
  if (err) throw err;
  console.log('Text replaced!');
});
