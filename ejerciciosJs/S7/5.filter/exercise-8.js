const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let button$$ = document.querySelector('button');

button$$.addEventListener('click', function() {
    const inputValue = document.querySelector('input').value;
    const filteredStreamers = streamers.filter(streamer => streamer.name.includes(inputValue));

    console.log(filteredStreamers);
})