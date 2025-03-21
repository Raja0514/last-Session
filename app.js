
//  const sayHi=(user)=>{

//     console.log(` hi ${user}`)
// }

//  const person="raja";

//  const personArray=["sathis","kumar","raja"];

// export{sayHi,person,personArray}


export const sayHi=(user)=>{

    console.log(`${user}`);
}

export const person="raja";

export const personArray=["sathis","kumar","raja"];


//export default


export{sayHi as Hello,person as user}