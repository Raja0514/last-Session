/*

Promise Definition in JavaScript ?

A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.

It allows you to handle asynchronous tasks like API calls, file reading, or database queries efficiently.

Key Features of a Promise

1. Pending → Initial state, before success or failure.

2. Fulfilled (Resolved) → Operation completed successfully.

3. Rejected → Operation failed.

why do we need Promises ?

Promises help improve code readability, error handling, and manageability for asynchronous operations in JavaScript. 

They make it much easier to work with async code, avoid callback hell, 

and ensure a smooth user experience in web applications.

*/

//syntax

//Promise



// const promise = new Promise(function (resolve, reject) {

//   // promise descriprion

// });

// // The promise creator

// function getPromise() {

//   return new Promise(function (resolve, reject) {

//     setTimeout(function () {
//       reject("The Promise is rejected");
//     }, 0);
//   });
// }



// function success(data) {
//   console.log(`The Resolved Message : ${data}`);
// }

// function failure(err) {
//   console.log(`The rejected Message ${err}`);
// }

// function final() {
//   console.log(`all done`);
// }

// // The Promise Receiver

// function getData() {
//   getPromise().then(success).catch(failure).finally(final);
// }
// console.log(`welcome to js`);

// getData();

// console.log(`Hello World`);

// //mental map how to study => connect to dots

// // promise creation

// function getPromise1() {
//   return new Promise(function (resolve, reject) {
//     let userlogin = false;

//     userlogin ? resolve("user Online") : reject("user Offline");
//   });
// }

// // promise receiver

// getPromise1()
//   .then(function (data) {
//     console.log(`${data}`);
//   })
//   .catch(function (err) {
//     console.log(`${err}`);
//   }).finally(console.log(`all done`))

//promise creation

function getPromise(){

  return new Promise(function(resolve,reject){

setTimeout(function(){
  
  reject("promise rejected")

},0)

  })

}

function a1(data){

  console.log(`${data}`)

}

function b1(err){

  console.log(`${err}`)

}


//receiveing part

// let res=getPromise()

// .then(a1)

// .catch(b1)

// .finally(console.log("done"))

//console.log(res);

// res.then(a1).catch(b1);



function getPromise1() {

  return new Promise(function (resolve, reject) {

    let userlogin = false;

    userlogin ? resolve("user Online") : reject("user Offline");

  });
}

// promise receiver

getPromise1()
  .then(function (data) {
    console.log(`${data}`);
  })
  .catch(function (err) {
    console.log(`${err}`);
  }).finally(console.log(`all done`))
