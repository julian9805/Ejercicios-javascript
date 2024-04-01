function findArrayIndex (array , text){
    for ( let i= 0; i < array.length; i++){
        if (array[i] === text){

            return i;
        }
    }

    return -1
}

function removeItem (array, text){

    let index = findArrayIndex(array, text);

    if (index > -1){

        array.splice(index, 1)
    }
    return array;

}

let arrayGatos = ['kiara', 'wilson', 'nala', 'pelusa']

console.log(removeItem(arrayGatos, 'kiara'))
