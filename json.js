// JSON (JavaScript Object Notation) is a general format to represent values and objects.

// 'JSON.stringify' to convert objects into JSON.
// 'JSON.parse' to convert JSON back into an object.

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  // It converst an object to a json while and convert all its variables to string type
  let json = JSON.stringify(student);
  
  
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

console.log(typeof(json))  // string

/* JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:
Function properties (methods).
Symbolic keys and values.
Properties that store undefined.
*/

// function greet(name) {
//     console.log("Hello"+name);
//   }

// function call (name,callback123){
//     callback123(name);
// }

// call("John",greet);

async function getData(){
  //   Get Request Maari -- Fetch API -- async await
     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
  //   JSON Parsing -- async
     let data =  await response.json();

     console.log(data);
 }

 getData();