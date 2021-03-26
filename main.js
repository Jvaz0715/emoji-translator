//first we need to query  our input box with # translator-input
const input = document.querySelector("#translator-input");

//once we queried the element  grab its .value property containing the inputs contents and store it in a variable
//const inputValue = input.value;

// query the h1 with #results where we put our output to our user
const result = document.querySelector("#results");

// query the submit button and then add event listener
const submitButton = document.querySelector('#submit-button');

//now add event listener

submitButton.addEventListener('click', function() {
    const inputValue = input.value;
    //results.innerText = encode(inputValue);

    //determine which radio is pressed;
    const radios = document.querySelectorAll('[type="radio"]');
    for (const radio of radios) {
        if (radio.checked === true && radio.value === "encode") {
            results.innerText = encode(inputValue);
        }

        if (radio.checked === true && radio.value === "madlib") {
            results.innerText = madlib(inputValue);
        }

        if (radio.checked === true && radio.value === "translate") {
            results.innerText = translate(inputValue);
        }

        if (radio.checked === true && radio.value === "search") {
            const array = search(inputValue);
            //console.log(array);
            result.innerHTML = '';
            if (array.length === 0) {
                results.innerText = "No emojis found";
            } else {
                for (let i = 0; i < array.length; i++) {
                    //console.log(array[i].symbol);
                    let emoji = array[i].symbol;
                    results.innerText += emoji;
                }
            }
            
        }
    }
})