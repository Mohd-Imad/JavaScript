//function currying
//prototype chain
//fetch API and display using fetch method with promise
//Diff b/w impure & pure functions
//first class function (is a function which can behaves like different datatypes. Ex- let first=function wish(){}----can be a variable,callback, returned in other func)
//Callback
//coersion
//IIFE-Immediately Invoked Function Expression
//Avoid hoisting
//Strict mode (avoid spelling mistake/ avoid reassign)
//Callback hell
//event.preventDefault() (is used to restrict any default DOM behaviour)

//find a largest word in a string

let string = 'find a largest word in a string'
let str = string.split(' ')

console.log(str);

let result = ''

for (let i = 0; i < str.length - 1; i++) {
    if (str[i].length > result.length) {
        result = str[i]
    }
}
console.log(result);

//How to return a word which is repeated inside a string 
//Event Queue
//WAP a string is palindrome or not
//Convert a number into a roman number
//Remove all the spaces in the given string without split and replace







