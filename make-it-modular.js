const myModule = require('./myModule.js');
let ls = process.argv[2];
let ext = process.argv[3]; //the dot it´s not given, so if you don´t add it the extension comparison won´t match :C

//opc failled
// console.log(myModule); //Whitout the following function, it trows an undefined line at the first position of the array... but why? .-.
// myModule (ls, ext, (err, files) => { //now it works but just passes two of three tests. It asks for the callback call :P
//   if (err) {
//     console.error(err);
//   }
//   console.log(files);
// });

//opc2
const callback = (err, list) => { //So I had to stablish de callback and call it
  if (err) console.error(err);
  list.forEach((file) => {
    console.log(file);
  })
};

myModule(ls, ext, callback);

//official solution
// const filterFn = require('./myModule.js');
// let dir = process.argv[2];
// let filterStr = process.argv[3];
//
// filterFn(dir, filterStr, function(err, list) {
//   if (err) {
//     return console.log('there was an error', err);
//   }
//   list.forEach((file) => {
//     console.log(file);
//   })
// });
