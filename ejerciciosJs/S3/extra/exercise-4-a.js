const countries = [
    {title: 'Random title',imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},  
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let div$$ = document.createElement('div');
document.body.appendChild(div$$);

for ( let country of countries){
    let h4$$ = document.createElement('h4');
    let text = document.createTextNode(country.title);
    h4$$.appendChild(text);
    div$$.appendChild(h4$$);
    let img$$ = document.createElement('img');
    let text2 = document.createTextNode(country.imgUrl);
    img$$.appendChild(text2);
    div$$.appendChild(img$$);
}



