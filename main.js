//first we need to query  our input box with # translator-input
const input = document.querySelector("#translator-input");

//once we queried the element  grab its .value property containing the inputs contents and store it in a variable
const inputValue = input.value;


// query the h1 with #results where we put our output to our user
const result = document.querySelector("#results");

//set its innerText to the result of passing the input 
result.innerText = encode(input.value);