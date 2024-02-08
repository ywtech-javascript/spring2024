/**
 * Make some functions:
 *  1. getNumberFromInput
 *     * Param: Takes a selector (string) as an argument
 *     * Return: The value (number) corresponding to the element  
 * 
 *  2. displayResult – to show the answer
 * 
 *  3. add – to add the two numbers
 * 
 *  4. subtract – to add the two numbers
 * 
 *  5. multiply – multiplies two numbers together
 * 
 *  6. divide –  divides the first number by the second number
 * 
 *  7. pow – raises the first number to the power of the second number

 */
function addNumbers() {
    // something to memorize: if you want to get what
    // the user typed out of a form element, use ".value"
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 + num2;

    document.querySelector("#answer").innerHTML = answer;
}

function subtractNumbers() {
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 - num2;

    document.querySelector("#answer").innerHTML = answer;
}

function multiplyNumbers() {
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 * num2;

    document.querySelector("#answer").innerHTML = answer;
}

function divideNumbers() {
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 / num2;

    document.querySelector("#answer").innerHTML = answer;
}
