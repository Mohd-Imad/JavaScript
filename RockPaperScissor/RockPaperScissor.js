let objects = ['rock', 'paper', 'scissor']

let playerOne = prompt('PlayerOne') 
// let playerTwo = prompt('PlayerTwo') 
let computer = objects[Math.floor(Math.random()*3)];
console.log(computer);

//for 2 players
/* if((playerOne === 'rock' && playerTwo === 'rock')||(playerOne === 'paper' && playerTwo === 'paper')||(playerOne === 'scissor' && playerTwo === 'scissor')){
    console.log('Tie');
}
else if((playerOne === 'rock' && playerTwo === 'scissor')||(playerOne === 'paper' && playerTwo === 'rock')||(playerOne === 'scissor' && playerTwo === 'paper')){
    console.log('playerOne won!');
}
else if((playerTwo === 'rock' && playerOne === 'scissor')||(playerTwo === 'paper' && playerOne === 'rock')||(playerTwo === 'scissor' && playerOne === 'paper')){
    console.log('playerTwo won!');
}
else{
    console.log('enter proper objects');
} */

//for single player with computer (ternary operator)
(playerOne === 'rock' && computer === 'rock')||(playerOne === 'paper' && computer === 'paper')||(playerOne === 'scissor' && computer === 'scissor') ? alert('Game Tie...!')
: (playerOne === 'rock' && computer === 'scissor')||(playerOne === 'paper' && computer === 'rock')||(playerOne === 'scissor' && computer === 'paper') ? alert('playerOne won...!')
: (computer === 'rock' && playerOne === 'scissor')||(computer === 'paper' && playerOne === 'rock')||(computer === 'scissor' && playerOne === 'paper') ? alert('computer won...!')
: alert('enter proper objects')