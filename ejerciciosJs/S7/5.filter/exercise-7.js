const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];



let input$$ = document.querySelector('input');

input$$.addEventListener('input', function(e){
    const searchTerm = e.target.value;
    const filteredStreamers = streamers.filter(streamer => streamer.name.includes(searchTerm));

    console.log(filteredStreamers);
});