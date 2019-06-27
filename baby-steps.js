// console.log(process.argv); //This didn´t work as expected and I do not know why :C
// Number(process.argv[2])

// opc1
const argumentList = process.argv;
const addedArg = argumentList.slice(2,argumentList.length);

let sum = 0;
let result = addedArg.forEach((value) => {
  sum += Number(value);
  return sum;
});
console.log(sum);

// official solution
// let result = 0;
// for (let i = 2; i <process.argv.length; i++) {
//   result += Number(process.argv[i]);
// };
// console.log(result);
