//Rock Paper Scissors

let playerOne = 'paper'
let computer = 'rock'

if(playerOne === computer){
    console.log('Game tie');
}
else if(playerOne === 'rock'){
    if(computer === 'paper'){
        console.log('computer wins');
    }
    else{
        console.log('playerOne wins');
    }
}
else if(playerOne === 'paper'){
    if(computer === 'scissors'){
        console.log('computer wins');
    }
    else{
        console.log('playerOne wins');
    }
}
else{
    if(computer === 'rock'){
        console.log('computer wins');
    }
    else{
        console.log('playerOne wins');
    }
}