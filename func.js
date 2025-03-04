// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// The syntax
// The switch has one or more case blocks and an optional default.
// It looks like this:

// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }


// If there are no arguments, parentheses are empty, but they must be present:
// let sayHi = () => alert("Hello!");

// sayHi();
// age=prompt("Age:",18)
// let welcome =(age<18)? () => alert("nope"): () => alert("Yess");
function oye(num){
    // console.log(op(8))

}

let hey=function(num){
    return num*num;
}

let exp=(a,b) => {
    return a**b;
}
// console.log(exp(2,8))

function print(fname="ketan",lname="goyal"){
    console.log(fname+" "+lname);
}

// print("sherr","babbar")

print(null,null)  // will take both the parameters as 'null'
print(undefined,"last")  // will use the default value of parameter incase of 'undefined'

// ==>> The "new Function" syntax
// The syntax for creating a function:Refloe

// let func = new Function ([arg1, arg2, ...argN], functionBody);




