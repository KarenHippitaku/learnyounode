const fs = require('fs');
const path = require('path');
// let ls = process.argv[2];// It seems like it doesn´t really need these two here. They´ll be called in the next file
// let ext = process.argv[3]

//opc1
module.exports = function (ls, ext, callback) { //at this level I can´t execute the callback, it´s just a parameter
  fs.readdir(ls, (err, list) => { //now the callback will be executed
    if (err) {
      return callback(err); //the error has to be handle also as a callback, so no console.error(err) (this way can´t pass the tests)
    }
    // console.log(list);
    list = list.filter((file) => { //I use filter to reduce the list to just the elements needed for the result.
      //The forEach will be applied in the next file, so instead of "if" we announce "return"
      return (path.extname(file) === '.' + ext) //the dot can´t be stablished into the variable anymore... I don´t know why .-.
    })
    callback(null, list); //and callback again instead of a console.log, that will also happen in the next js file :O
  })
};

//official solution
// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function(err, list) {
//     if (err) {
//       return callback(err)
//     }
//     list = list.filter(function(file) {
//       return path.extname(file) === '.' + filterStr;
//     })
//     callback(null, list);
//   })
// };
