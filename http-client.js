const http = require('http');
const url = process.argv[2];

// http.get() for simple get request
// http.get(url, callback) { //this specific callback has a signature callback (response) => {}
//   callback (response) => { //Response is a Node Stream object. You can teat this like and object that emit events (data, error end)
//     response.on('data', (data) => { //check setEncoding() and 'utf-8'
//     })
//   }
// }

// http.get(url, (response) => {
//   response.on(url.parse(), (chunk) => { //I try to use .parse(), but it didn't work, how it is used, then? .-.
//     console.log('BODY:'+ chunk);
//   })
// })

//opc1
http.get(url, (response) => {
  response.on('data', (data) => {
    console.log(data.toString());
  }).on('woopsi daysi', (error) => { //I try response.on but it wasn´t working. In the parentesis you car write either err or error.
    //The text for the error seems to be not important, it can be customized :)
    console.error(error);
  })
});

//opc2 joe´s version
http.get(url, (response) => {
  response.on('data', (data) => {
    console.log(data.toString());
  })//you don´t need to handle errors to pass the excersice, but you can c:
});

//official solution
const http = require('http'); //you don´t need to put the url into a variable since is just called once

http.get(process.argv[2], function(response) {
  response.setEncoding('utf-8');
  response.on('data', console.log);
  response.on('error', console.error);//I didn´t know you could use console like this :O
}).on('error', console.error);
