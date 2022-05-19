
// Creating html elements dynamically
let containerCounter = document.querySelector('.container-counter')
let containerControl = document.querySelector('.container-control')

let createElement = ((tag, className, content) => {
    let newEl = document.createElement(tag)
    newEl.innerHTML = content
    newEl.classList.add(className)
    newEl.setAttribute('id', className)
    return newEl
});

containerCounter.appendChild(createElement('h1', 'counter', 0))

containerControl.appendChild(createElement('button', 'increment', '+'))
containerControl.appendChild(createElement('button', 'reset', 'Reset'))
containerControl.appendChild(createElement('button', 'decrement', '-'))


///////////////////////////////////////////////////////////////////////////////////

let visitor = prompt('Hello! What\'s your name? ', '')

// We will cut the entered name if it is necessary for reasons of space
while (true){
    if (visitor.length > 10){
        visitor = visitor.slice(0, 10)
    }
    break
}

let welcome = document.getElementById('welcome')

let regards = `Welcome ${visitor}! `

welcome.textContent += regards


////////////////////////////////////////////////////////////////////////////////////


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
