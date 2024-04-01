// const toys = [

//     {id: 40, name: 'El gato felix'},
//     {id: 5, name: 'Buzz MyYear'}, 
//     {id: 11, name: 'Action Woman'}, 
//     {id: 23, name: 'Barbie Man'}, 
//     {id: 40, name: 'El gato con Guantes'}, 
//     {id: 40, name: 'El gato felix'}  
// ]

// /*const toysSinGato = [];

// for (const toy of toys) {
//   if (!toy.name.includes('gato')) {
//     toysSinGato.push(toy);
//   }
// }

// console.log(toysSinGato); */
// console.log(toys.length);
// for (i = toys.length - 1 ; i >= 0; i--){
//     if(toys[i].name.includes("gato")){
//         toys.splice(i,1);
//     }
// }
// console.log(toys);

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
  ]
  let arraySinGato = [];
  for (let toy of toys){
    if(toy.name.includes('gato')){
      arraySinGato.push(toy)
    }
  }
  console.log(toys);
  console.log(arraySinGato);
  
