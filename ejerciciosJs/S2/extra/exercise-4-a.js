// function findArrayIndex (array, text) {
    
//     return array.indexOf(text)
// }

// let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
// console.log(findArrayIndex(array, 'Mosquito'));

function findArrayIndex (array , text){
    for ( let i= 0; i < array.length; i++){
        if (array[i] === text){

            return i;
        }
    }

    return -1
}

let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex(array, 'Caracol'));
console.log(findArrayIndex(array, 'Ajolote'));
console.log(findArrayIndex(array, 'Perro'));
  
