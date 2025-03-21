let x = 0;

function f2() {

  if (x === 0) {

    let x = 1;

    console.log(x);

  }
  console.log(x);
}

//f2();

//console.log(x);


/*

what is callback ?

A function passed into another function as an argument to be executed later.

Two types of callback

1.Synchronous callback

2.Asynchronous callback

following javascript build in methods accept callback function

settimeout()

setinterval()

map()

filter()

reduce()

addEventListner() etc..

*/

// function test1(callback) {

//   let data = "Hello world";
//   callback(data);

// }

// function test2(info) {

//   console.log(`Sychronous callback : ${info}`);
// }

// test1(test2);

// console.log('started 1.....')

// function test3(callback){
  
//     setTimeout(()=>{

//         let data="Hello World";
//          callback(data);

//     },2000)
// }

// function test4(info){

//     console.log(`asynchronous callback : ${info}`)
// }

// test3(test4);

// console.log("started 2 ....")

// function click(){
//     console.log('window clicked by user')
// }

// window.addEventListener('click',click)

function test1(callback){ //receive

  let data="Hello";

  callback(data);

}



function test2(info){  //callback

  console.log(`${info}`)
}

//test1(test2)

//console.log("welcome");

function test3(callback){
  
    setTimeout(()=>{

        let data="Hello World";
         callback(data);

    },2000)
}

function test4(info){

    console.log(`asynchronous callback : ${info}`)
}

test3(test4);

console.log("started 2 ....")
