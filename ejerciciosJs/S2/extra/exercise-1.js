const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const category = [];
for (let movie of movies){
    let movieCategories = movie.categories
    for (let movieCategory of movieCategories){
        if(!category.includes (movieCategory)){
            category.push(movieCategory)
        }
    }
}

console.log(category)