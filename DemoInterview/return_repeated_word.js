//How to return a word which is repeated inside a string 


let string  = "Return the repeated word in the given string"

let str = string.split(' ')
console.log(str);


for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i++]) {
      console.log(`${str[i]} is equal to ${str[i++]}`);
    }
  }

