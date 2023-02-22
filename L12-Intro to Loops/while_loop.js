//While Loop

//Syntax

/* initialisation
while(condition){
    statements
    incr/decr
}*/


//Ex-1
let numberOne = 1
while (numberOne <= 50) {
    console.log(numberOne);
    numberOne++
}

//Ex-2
let numberTwo = 2
while (numberTwo <= 20) {
    console.log(numberTwo);
    numberTwo += 2              //incrementing 2
}

//Ex-3
let name = 'Imad'
let counter = 0
let myLetter;

while (counter <= 3) {
    myLetter = name[counter]
    console.log(myLetter);
    if (counter === 1) {
        counter += 2
        continue;         //terminates the current iteration and continues with next iteration inside a loop
    }
    if (myLetter === 'a') break;  //come out of loop if this gets true
    counter++
}