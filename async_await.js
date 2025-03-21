//promise creation

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 0);
  });
}

// promise receiver

async function start() {

  let res = await getData();

  console.log(res);

}

//start();

function start1() {

  getData().then(function (data) {

    console.log(`${data}`);
  });
}

start1();

//fetch return a promise
//fetch browser API

async function apiCall() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await data.json();
  console.log(result[99]);
}

//apiCall();

async function apiCall2() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((data) => data.json())
    .then((result) => console.log(result[99]));
}

//apiCall2();

/*

Async and Await Notes:

1. async/await must be used together (Exceptions JS Module & Chrome Dev Tools console)

2. async/await only affects Promise receiver

3. you can await any function that returns a Promise

4. Any function can converted into async

5. Async function return a promise by default

6. Error Handling with try/catch

*/

//receiving part

fetch('https://jsonplaceholder.typicode.com/posts/1')

  .then(response => response.json()) // Converts response to JSON

  .then(data => console.log(data))   // Logs the data

  .catch(error => console.error('Error:', error));

async function getData() {

  try {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
  } 

  catch (error) {
    console.error('Error:', error);
  }
}
getData();
