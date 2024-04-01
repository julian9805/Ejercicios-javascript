const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement('ul');


for (const app of apps){
    let li$$ = document.createElement('li');
    li$$.textContent = app;
    ul$$.appendChild(li$$);

}


document.body.appendChild(ul$$);