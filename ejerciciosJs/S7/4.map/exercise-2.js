const users = [
    {id: 1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];

function getNames(users){
    let names = [];
    for (let user of users){
        let name = user.name;
        if(name[0] === 'A'){
            name = 'Anacleto'
        }
        names.push(name);
    }   
    return names;
}

console.log(getNames(users));

