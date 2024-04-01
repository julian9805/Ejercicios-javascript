// const placesToTravel = [
//         {id: 5, name: 'Japan'}, 
//         {id: 23, name: 'Murcia'}, 
//         {id: 40, name: 'Santander'},
//         {id: 44, name: 'Filipinas'}, 
//         {id: 59, name: 'Madagascar'},
//         {id: 11, name: 'Venecia'}
//     ]
// console.log(placesToTravel);

// for (let i = 0; i < placesToTravel.length; i++){
    
//     if (placesToTravel[i].id === 11){
//         placesToTravel.splice(i,1);
//     }
//     else if (placesToTravel[i].id === 40){
        
//           placesToTravel.splice(i,1);
//     }
// }

// console.log(placesToTravel);

const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]

for (let Travel of placesToTravel){
    if (Travel.id == 11){
        placesToTravel.splice(1,1)
    }
    if (Travel.id == 40){
        placesToTravel.splice(2,1)
    }
}
console.log(placesToTravel);