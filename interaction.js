/* Don’t forget the "s" letter!
It returns a collection, not an element! 
==>  Novice developers sometimes forget the letter "s". That is, they   try to call getElementByTagName instead of getElementsByTagName.

The "s" letter is absent in getElementById, because it returns a single element. But getElementsByTagName returns a collection of elements, so there’s "s" inside.


// Interaction: alert, prompt, confirm

// ==> alert
// shows a message.
// ==> prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// ==> confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

// Alert
// It shows a message and waits for the user to press “OK”.
// For example:
alert("Hello");

// Prompt
// The function prompt accepts two arguments:
// result = prompt(title, [default]);
// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
// title
// The text to show the visitor.
// default
// An optional second parameter, the initial value for the input field.

// The visitor can type something in the prompt input field and press OK. Then we get that text in the result. Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.
// The call to prompt returns the text from the input field or null if the input was canceled.
// For instance:
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

// Confirm
// The syntax:
result = confirm(question);
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.

// For example:
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed */
