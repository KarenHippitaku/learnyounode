const fs = require('fs');
const path = require('path'); //path.extname(path) to get the extension of the file and .basename gives youthe name of an specific extesion file
// filter('path/to/dir', 'file.ext') //the file extension can be txt, md, jpg, doc, etc.
// console.log(process.argv);
let ls = process.argv[2];
let ext = '.' + process.argv[3]; //the dot it´s not given, so if you don´t add it the extension comparison won´t match :C
// let list = path.basename(ls, ext1)
fs.readdir(ls, (err, list) => {
  if (err) {
    return console.log(err);
  }
  // console.log(list);
  list.forEach((file) => {
    let extFind = path.extname(file);
    // console.log(extFind);
    if (extFind === ext) {
      console.log(file);
    }
  })
});

//official solution
// let folder = process.argv[2];
// let ext = '.' + process.argv[3];
//
// fs.readdir(folder, function (err, files) {
//   if (err) return console.err(err);
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file);
//     }
//   })
// });
