// ==>>  Attributes <<==
// Definition: Attributes are defined in the HTML markup of an element. They are part of the DOM element as defined in the HTML specification.
// Access/Manipulation: Attributes can be accessed or modified using methods like .getAttribute() or .setAttribute().

Example:
// HTML
{/* <input type="text" id="myInput" value="Hello"> */}

// JavaScript:
const input = document.getElementById("myInput");
console.log(input.getAttribute("value")); // Outputs: "Hello"
input.setAttribute("value", "World"); // Changes the attribute
console.log(input.getAttribute("value")); // Outputs: "World"

// ==>>  Properties  <<==
// Definition: Properties are JavaScript representations of elements and their associated data. They are part of the element object in the DOM.
// Access/Manipulation: Properties can be accessed or modified directly using dot notation.

Example:
// HTML:
{/* <inputt type="text" id="myInput" value="Hello"> */}

// JavaScript:
const inputt = document.getElementById("myInput");
console.log(inputt.value); // Outputs: "Hello"
inputt.value = "World"; // Changes the property
console.log(inputt.value); // Outputs: "World"