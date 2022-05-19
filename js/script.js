
let name = prompt('Hello! What\'s your name? ', '')
let welcome = document.getElementById('welcome')

let regards = `Welcome ${name}! `

welcome.textContent += regards


let increment = document.getElementById("increment");
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');
let counter = document.getElementById('counter')

let number = 0;

// this function increases the counter value by one unit
let incrementCounter = ()=>{
    number += 1;
    counter.innerHTML = number
};


// this function decreases the counter value by one unit 
// a small condition is set to prevent the counter from becoming negative
let decrementCounter = ()=>{
    if (number == 0){
        number = 0
        counter.innerHTML = number
    }else{
        number -= 1;
        counter.innerHTML = number
    }   
};

// this function resets the counter value to zero
let resetCounter = ()=>{
    number = 0;
    counter.innerHTML = number
};


increment.addEventListener('click', incrementCounter);

decrement.addEventListener("click", decrementCounter);

reset.addEventListener("click", resetCounter);
