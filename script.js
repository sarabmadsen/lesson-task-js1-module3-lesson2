// Question 1

function greet(name = "John") {

    console.log(name);
    return `Hello ${name}!`;
    
}

greet("Sara");


// Question 2

function reusableFunction(className, valueText) {

    return `<div class="${className}">${valueText}</div>`;

}

reusableFunction("container", "Hello");


// Question 3:

// Convert the below API call to use a try-catch-finally statement.


async function getFact() {

    try {

        const response = await fetch("https://cat-fact.herokuapp.com/facts");
        const results = await response.json();
        const facts = results.all;
        console.log(facts[8].text);

    }

    catch (error) {

        console.log("an error occured");

    }

    finally {
        console.log("This will run no matter what");
    }

}

getFact();