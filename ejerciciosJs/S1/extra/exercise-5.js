// const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
// let totalSellCount = 0;

// for( let product of products){
//     totalSellCount += product.sellCount;
// }

// let sellCountAvg = totalSellCount / products.length;
// console.log(sellCountAvg);

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];
let sumaTotal = 0;
for (let product of products){
    sumaTotal += product.sellCount;
    
}
let mediaVenta = sumaTotal / products.length;

console.log(sumaTotal);

console.log(mediaVenta);