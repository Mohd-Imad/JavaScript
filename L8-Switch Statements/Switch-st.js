// Conditionals : Switch Statements 

//Syntax
/* switch(expression or value){
    case choice1:
        //if this case match executes this first part
    break;
    case choice2:
        //if this case match executes this second part
    break;
    case choice3:
        //if this case match executes this third part
    break;
    //add as many cases needed
    default:
        //executes this part if no case matches
        //no need a break here
} */

switch(3){
    case 1:
        console.log(1);
    break;
    case 2:
        console.log(2);
    break;
    case 3:
        console.log(3);
    break;
    default:
        console.log("No case Matched");    
}

switch(Math.floor(Math.random()*5+1)){
    case 1:
        console.log(1);
    break;
    case 2:
        console.log(2);
    break;
    case 3:
        console.log(3);
    break;
    default:
        console.log("No case Matched");    
}