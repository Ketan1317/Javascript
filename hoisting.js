// Hoisting in JavaScript is a behavior in which variables and function declarations are moved (or "hoisted") to the top of their scope during the compilation phase, before the code is executed. This means you can use variables and functions before they are actually declared in the code.

// =>> Only Declarations are hoisted not the initialisations

// ==>> Hoisting for Functions
// Function Declarations are fully hoisted.
// You can call a function before it is defined in the code because the function declaration is moved to the top of the scope.

// ==>> var Variables:
// First of All they are not Block scope Elements i.e can be accessed outside block also
// IS APPLICABLE TO ONLY VAR NOT Let OR Const
// Variables declared with var are hoisted but are undefined until their declaration is encountered in the code.

// Class Hoisting is not possible