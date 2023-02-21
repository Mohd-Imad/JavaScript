//User Input

//1---alert
alert("Hello World...!")

//2---confirm
let myBoolean = confirm("Click Ok to execute true part\nClick Cancel to execute false part") //here \n  is for line break
console.log(myBoolean);

//3---prompt  (can receive directly user input)
let myage;
let myname = prompt("Please enter your name")

console.log(myage ?? 'Your age is not defined');      //here ?? is a nullish coalescing opertor 
                                                    // which returns right hand operand when left hand operand  is null or undefined
            
            
/* if(myname){
    console.log(myname);
}    
else{
    console.log('You didnt enter your name');
}    */                                             
         
if(myname){
    console.log(myname.length);
    console.log(myname.trim().length);            //here trim() method removes all unwanted blank spaces after complete input, but not in between space of words
    console.log(myname.trim());
}    
else{
    console.log('You didnt enter your name');
}   
