//Strings
let myString = "JavaScript"
console.log(myString);


//String Methods

console.log(myString.length);
console.log('Hi, How are you?'.length);

console.log(myString.charAt(5));       //returns the particular string value according to the passed index value in method charAt
console.log(myString.charCodeAt(0));   //returns the ASCII value of string value of given index value

console.log(myString.indexOf('r'));    //returns index value of particular string value passed 

console.log(myString.slice(4,10));     //returns a particular part of string (substring) 4-index value and 10-position of value
console.log(myString.slice(0,-1));     //for removing last value of string
console.log(myString.slice(4));        //without passing position of value, from index value complete pending value ll be returned
console.log(myString.substring(4,10));  //same as slice

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

console.log(myString.includes('Scr'));  //returns boolean value based on either the given string value exist or not

console.log(myString.split('S'));       //split the string value in substring based on given particular string value and returns in array 
console.log(myString.split(''));        //split complete string and returns all letter seperately
console.log("Karkuvel,Imad,Kishore".split(','));
console.log("How are you?".split(' ')); 







