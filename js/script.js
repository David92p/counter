//let name = prompt('Hello! What\'s your name? ')

let higher = document.getElementById('higher');
let lower = document.getElementById('lower');
let reset = document.getElementById('reset');
let number = document.getElementById('number')


let count = 0;

let incrementCounter = ()=>{
    count += 1;
    number.innerHTML = count
};

let decrementCounter = ()=>{
    count += 1;
    number.innerHTML = count;
};

let resetCounter = ()=>{
    count = 0;
    number.innerHTML = count
};

higher.addEventListener('click', incrementCounter())
