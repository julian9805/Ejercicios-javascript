// function rollDice(sides) {
//     return Math.floor(Math.random() * sides) + 1;
// }

// for ( let i = 0; i < 50; i++){
//     console.log(rollDice(6));
// }

function rollDice(face){
    let result = Math.floor(Math.random()* face) +1;
    return result; 
}

console.log(rollDice(5))
console.log(rollDice(5))
console.log(rollDice(1))