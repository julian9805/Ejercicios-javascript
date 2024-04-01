// const users = [
//     {name: 'Manolo el del bombo',
//         favoritesSounds: {
//             waves: {format: 'mp3', volume: 50},
//             rain: {format: 'ogg', volume: 60},
//             firecamp: {format: 'mp3', volume: 80},
//         }
//     },
//     {name: 'Mortadelo',
//         favoritesSounds: {
//             waves: {format: 'mp3', volume: 30},
//             shower: {format: 'ogg', volume: 55},
//             train: {format: 'mp3', volume: 60},
//         }
//     },
//     {name: 'Super Lopez',
//         favoritesSounds: {
//             shower: {format: 'mp3', volume: 50},
//             train: {format: 'ogg', volume: 60},
//             firecamp: {format: 'mp3', volume: 80},
//         }
//     },
//     {name: 'El culebra',
//         favoritesSounds: {
//             waves: {format: 'mp3', volume: 67},
//             wind: {format: 'ogg', volume: 35},
//             firecamp: {format: 'mp3', volume: 60},
//         }
//     },
// ]
// let totalVolumen = 0;
// let count = 0;
// for (let user of users){
//     for (let favoriteSong in user.favoritesSounds){
//         totalVolumen = totalVolumen + user.favoritesSounds[favoriteSong].volume;
//         count = count + 1;
//     }
// } 

// let average = totalVolumen / count;
// console.log(average);

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let volumTotal = 0;

let sonidosTotal = 0;

for(let user of users){
    let sonidosFavoritos = user.favoritesSounds
    for(let sonido in sonidosFavoritos){
        let datosSonido = sonidosFavoritos[sonido];

        volumTotal += datosSonido.volume;

        sonidosTotal++;

    }
}

    let mediaVolunem = volumTotal/sonidosTotal;

    console.log(mediaVolunem)