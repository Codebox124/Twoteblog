const add = document.querySelector('.add');
const subtract = document.querySelector('.sub');
const result = document.querySelector('.result');


result.innerHTML = 1;

add.addEventListener('click', ()=>{
    result.innerHTML ++
})

subtract.addEventListener('click', ()=>{
    result.innerHTML = 1
})