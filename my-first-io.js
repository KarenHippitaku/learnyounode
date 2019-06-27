const fs = require('fs');

let file = process.argv[2]; //this is not a path, so it´s rerading an specific file that i didn´t know of .-.
// console.log(process.argv[2]);
let content = fs.readFileSync(file)
//This gives you the full content of the file, even de comments. So simple '('o')'
// let content = fs.readFileSync('c:/Users/DM/Documents/Laboratoria/Ejercicios/learnyounode/hello-world.js', 'utf-8')
//the utf-8 saves you from using .toString()
// console.log(content);

let str = content.toString()
let lines = str.split('\n').length;
console.log(lines-1);

//This doesn´t seem to be doing any changes .-. (wait for it)... until you add .split()
//but this option is just spliting the array, so it says that you have a single string with many lines :V
// let str = content.toString().split();
// console.log(str);

//official solution
//
// let contents = fs.readFileSync(process.argv[2])
// let lines = contents.toString().split('\n').length - 1
// console.log(lines)

//or the ultra slimmed version
//
// let lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
// console.log(lines)
