//Numbers

//An integer is a whole number
let myNumber = 18
console.log(myNumber);

//A number with a decimal point is a float which references the 'floating point'
let myFloat = 18.0
console.log(myFloat);

let myString = '18'
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


