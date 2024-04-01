let button$$ = document.querySelector('button');

let input$$ = document.querySelector('input');

button$$.addEventListener('click',() => {
    input$$.addEventListener('input',(event) => {
        console.log(event.target.value);
    })
})