function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    
    if(hrs < 10){
        hrs = '0' + hrs;
    }
    if(min < 10){
        min = '0' + min;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);


////////////////////////////////////////////////////

let displayValue = "";
let firstInput = "";
let secondInput = "";
let operator = "";

let display = document.getElementById('screen');
let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.sign');
let root = document.querySelector('.root');
let percentage = document.querySelector('.parsent')
let plusMinus = document.querySelector('.negative');
let decimal = document.querySelector('.decimal');

let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');


//displaying the input inside the calculator screen
numbers.forEach((number) => number.addEventListener('click', (e) => {
    updateDisplay(e.target.textContent);
    display.innerText = displayValue;
}));

//Limit the input display to 9 digit
updateDisplay = (numBtn) => {
    if(displayValue.length < 9) {
        displayValue = firstInput += numBtn;
    }
};

//create a function that takes 2 numbers and the operate
operators.forEach((sign) => sign.addEventListener('click', (e) => {
    operate(e.target.textContent);
}))

operate = (sign) => {
    operator = sign;

    firstInput = secondInput;
    secondInput = displayValue;
}

//evaulating the value of inputs
equal.addEventListener('click', (e) => {
    if(firstInput != '' && secondInput != ''){
        calculate();
        display.innerText = displayValue;
    }
})

function calculate() {

    firstInput = Number(firstInput);
    secondInput = Number(secondInput);
    

    if(operator === "+") {
        displayValue =  secondInput + firstInput;
    }else if(operator === "-") {
        displayValue =  secondInput - firstInput;
    }else if(operator === "×") {
        displayValue =  secondInput * firstInput;
    }else if(operator === "÷") {
        displayValue =  secondInput / firstInput;
    }
}



//clear the input of the calculator screen
clear.addEventListener('click', (e) => {
    displayValue = "";
    firstInput = "";
    secondInput = "";
    operator = "";
    display.innerText = 0;
})


//
root.addEventListener('click', (e) => {
    squareRoot();
    function squareRoot() {
        display.innerText = displayValue * displayValue;
    }
})



//
percentage.addEventListener('click', (e) => {
    parcent();
    function parcent() {
        display.innerText = (displayValue / 100);
    }
})


//
plusMinus.addEventListener('click', (e) => {
    negative();
    function negative() {
        display.innerText = (displayValue * -1);
    }
})






