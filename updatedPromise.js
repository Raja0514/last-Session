//promise creation

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("promise are rejected");
    });
  }, 0);
}

//sucess

function a1(data) {
  console.log(`${data}`);
}

//failure

function b1(err) {
  console.log(`${err}`);
}

//promise receiver

// Receivig part method 1



const res=getData();

console.log(res);

res.then(a1,b1);



// Receiveing part -method 2

const res1 = getData();

console.log(res1);

res1.then(function a1(data) {
  console.log(`${data}`);
},
function b1(err) {
    console.log(`${err}`);
  }
  
);


// Receiveing part -method 3

const res2=getData()

res2.then(function(data){
    console.log(`${data}`)
}).catch(function(err){
    console.log(`${err}`)
}).finally(function(){
    console.log("done")
})

// Receiveing part -method 4

getData().then(data=>console.log(data)).catch(err=>console.log(err))

