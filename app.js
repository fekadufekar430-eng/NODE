
// THIS IS NODE CLASS
//  DISPLAY SOME TASK IN NODE OR TERMINAL

let a = 14;
let b = 7;

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log("Sum:", sum);
console.log("Subtraction:", sub);
console.log("Multiplication:", mul);
console.log("Division:", div);


// // http are a built in core module use for create a server 
// const http = require('http');//import from node for usage

// // server create
// const server = http.createServer((req, res) => {
//     let a = 2;
//     let b = 7;

//     let sum = a + b;
//     let sub = a - b;
//     let mul = a * b;
//     let div = a / b;

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({  // this line of code use json object convert to json string

//  // this line of code uses for  
//  // It is used to hold all the numbers we used and their results together, 
//  // and display them to the user in a clean format. the results give just like json file

//         numbers: { a, b },  
//         sum,
//         sub,
//         mul,
//         div
//     }, null, 2));
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });