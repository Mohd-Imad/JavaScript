//Numbers

//An integer is a whole number
let myNumber = 18
console.log(myNumber);

//A number with a decimal point is a float which references the 'floating point'
let myFloat = 18.01
console.log(myFloat);

let myString = '18.0123vfvfd'
console.log(myString);

//Comparing 
console.log(myNumber === myFloat);   //true
console.log(myNumber === myString);  //false, coz of DT

console.log(myString + 3);  //this concates, coz it's a string

console.log(Number(myString));   //Converting string to number 
console.log(typeof(myString));   //string   
console.log(typeof(Number(myString)));  //number

console.log(Number(myString) + 3);  //here addition ll be performed, coz now string converted to number

console.log(Number(myString) === myNumber); //true

//Number methods
console.log(Number.isInteger(myNumber));   //true --checks the number is integer or not
console.log(Number.isInteger(myString));   //false

console.log(Number.parseFloat(myString));  //returns float---while parsing this automatically removes non numeric chars anad change it's datatype to number DT

console.log(Number.parseInt(myString));  //returns integer---while parsing this automatically removes non numeric chars anad change it's datatype to number DT

console.log(Number.parseFloat(myString).toFixed(2));  //formats a number according to how many decimal points you provide as parameter

console.log(myFloat.toString());  //returns a string representing the number
console.log(typeof myFloat.toString());

//NaN- Not a Number
console.log(Number('Imad'));
console.log(Number.isNaN('Imad')); //false --determines the value is NaN and its type is number
console.log(isNaN('Imad')); //true  --determines the value is NaN or not



