const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

const WORD_TO_CHECK = 'Camiseta';
for(let product of products){
  if  (product.includes(WORD_TO_CHECK)){
    console.log(product);
  }
}

// const products = [
//   'Camiseta de Pokemon', 
//   'Pantalón coquinero', 
//   'Gorra de gansta', 
//   'Camiseta de Basket', 
//   'Cinrurón de Orión', 
//   'AC/DC Camiseta'
// ]
// for (let product of products){
//     if(product.includes('Camiseta')){
//       console.log(product)
//     }
// }

