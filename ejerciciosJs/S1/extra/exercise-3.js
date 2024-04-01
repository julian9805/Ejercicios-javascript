const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let littleFilm = [];
let mediumFilm = [];
let longFilm = [];

for (let movie of movies){
    if(movie.durationInMinutes < 100){
        littleFilm.push(movie);
    } else if (movie.durationInMinutes < 200){
        mediumFilm.push(movie);
    } else {
        longFilm.push(movie);
    }
}
console.log(littleFilm, mediumFilm, longFilm);

// const movies = [
//     {name: "Your Name", durationInMinutes: 130},
//     {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
//     {name: "Origen", durationInMinutes: 165}, 
//     {name: "El señor de los anillos", durationInMinutes: 967}, 
//     {name: "Solo en casa", durationInMinutes: 214}, 
//     {name: "El jardin de las palabras", durationInMinutes: 40}
// ];

// let peliculaPequeña = [];
// let peliculaMediana = [];
// let peliculaGrande = [];

// for (let movie of movies){
//     if (movie.durationInMinutes < 100){
//         peliculaPequeña.push(movie);
//     }
//     if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200){
//         peliculaMediana.push(movie);
//     }
//     if ( movie.durationInMinutes > 200){
//         peliculaGrande.push(movie);
//     }
// }

// console.log(peliculaPequeña);
// console.log(peliculaMediana);
// console.log(peliculaGrande);