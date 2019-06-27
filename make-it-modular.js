const myModule = require('./myModule.js');
let ls = process.argv[2];
let ext = process.argv[3]; //the dot it´s not given, so if you don´t add it the extension comparison won´t match :C

// console.log(myModule); //Whitout the following function, it trows an undefined line at the first position --
//of the array... but why? .-.

//opc 1
myModule(ls, ext, (err, list) => { //now it works
  if (err) {
    console.error('Someone fuck it up', err);
  }
    list.forEach((file) => { //This line was missing, so it didn´t have a place to took the files from
      console.log(file);
  })
});

//opc2
// const callback = (err, list) => { //This function can be called whatever you like, callback, filterFn, myModule, etc.
//   if (err) console.error(err);
//   list.forEach((file) => {
//     console.log(file);
//   })
// };
//
// myModule(ls, ext, callback);

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
