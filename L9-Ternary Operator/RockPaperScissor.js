//Rock Paper Scissors (just for understanding)

let playerOne = 'scissor'
let computer = 'paper'
let result = playerOne === computer ? "game tie"
: playerOne ==='rock' && computer === 'paper' ? "computer wins!"
: playerOne ==='paper' && computer === 'scissor' ? "computer wins!"
: playerOne ==='scissor' && computer === 'rock' ? "computer wins!"
: 'playerOne wins!'

console.log(result);
