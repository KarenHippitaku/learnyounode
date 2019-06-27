const fs = require('fs');

// let file = process.argv[2]; //I decided not to use this line, to make it shorter, and still works :D
fs.readFile(process.argv[2], 'utf-8', (err, data) => { //contents equeals data and buf
  if (err) throw err;
  let lines = data.split('\n').length-1
  console.log(lines);
});

//official solution
// let file = process.argv[2];
// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err);
//   }
//   let lines = contents.toString().split('\n').length-1
//   console.log(lines);
// });
