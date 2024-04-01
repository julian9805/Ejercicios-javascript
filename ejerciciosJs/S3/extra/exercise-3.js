const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ul$$ = document.createElement('ul');
let div$$ = document.querySelector('div');

div$$.appendChild(ul$$);

for ( let car of cars){
    let li$$ = document.createElement('li');
    let text = document.createTextNode(car);
    li$$.appendChild(text);
    ul$$.appendChild(li$$);
}
