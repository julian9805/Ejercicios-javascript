const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);

for (let country of countries){
    const li$$ = document.createElement('li');
    let texto = document.createTextNode(country);
    li$$.appendChild(texto);
    ul$$.appendChild(li$$);
}



