//Do-While Loop

//Syntax
/* initialisation
 do{
    statements
    incr/decr
}while(condition) */


//Ex-1
let x = 7
do{
    console.log('Imad');  
    x--
}while(x>5)

//here, do statement gets executed without checking the condition atleast once
//if while condition is true then do statement executes again number of times until the while condition gets false

//Ex-2
let a = 1
do{
    console.log("Hello");
    a++
}while(a<=10)