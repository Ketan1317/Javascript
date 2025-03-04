// JavaScript's automatic garbage collector makes memory management much easier, but developers should follow best practices to avoid memory leaks, such as removing unnecessary references, event listeners, or large data structures.

let obj={
    Fname:"ketan",
    age:19
}
// It is called Spread Operator
let newObj={...obj};  // cloning the obj in newObj using "{... oldObjName}"


// This is called assign method
let future=Object.assign({},obj); // Cloning via using Object.assign({},oldObjName) ==>> Can take multiple objects


// Cloning using iterations i.e for loop
let hello={};
for(let key in obj){
    let val=obj[key];
    hello[key]=val
}

console.log(hello)