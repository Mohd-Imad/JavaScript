//Ternary Operator

//Syntax: 
// condition ? ifTrue : ifFalse

let name = "Mohammed Imad"
let result

name ? result = `My name is ${name}` : result = `No result...!`
console.log(result);


//Multiple conditions
let testScore = 59;
let grade = testScore > 89 ? "A" 
: testScore > 69 ? "B" 
: testScore > 35 ? "C" 
: "F"

console.log(`My test Grade is ${grade}`);
