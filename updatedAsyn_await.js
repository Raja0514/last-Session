/*

Async and Await is Synchronous program ?

Answer :

No , async/await in javaScript is not synchronous ;

its an abstraction over Promises that makes asynchronous

code look and behaviour more like asynchrnous code.

However it is still asynchrnous in nature

How async/await Works

=> when you use await , javascript pauses execution of the

that function until the prommise resolves.

=> But the rest of the javascript code (outside that function)

continues to run asynchrnously

=> This avoid blocking the main thread while waiting

for an asynchrnous operation to complete


*/

// Example

console.log("start");

async function fetchData() {
  console.log("Fetching Data...");
  let data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data Received..."), 0)
  );
  console.log(data);
}

fetchData();

console.log("End");


/*

Explanation of the above code

1."Start" is logged is firt

2.fetchData() is called , logging "Fetching Data..."

3.The await keyword pauses execution inside fetchData() , but does not block the
  
  main thread

4."End" is logged immediately

5.After 0 secionds ," Data Received " is logged


Notes:

1.Async/await looks synchronous but is actually asynchrnous

2.its makes asynchrnous code easier to read and maintain

3.it still follow javascript non-blocking nature


*/

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