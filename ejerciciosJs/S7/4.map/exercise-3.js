const cities = [
    {isVisited:true, name: 'Tokyo'}, 
    {isVisited:false, name: 'Madagascar'},
    {isVisited:true, name: 'Amsterdam'}, 
    {isVisited:false, name: 'Seul'}
];

function getNamesVisited(){
    let list = [];
    for(let city of cities){
        let place = city;
        if(place.isVisited === true){
            list.push(place.name + (' Visitado'));
        }   else{
            list.push(place.name);
        }
    }
    return list;
}

console.log(getNamesVisited(cities));