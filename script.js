function add(a,b){
    a=a*1;
    b=b*1;
    return a+b;
};
function subtract(a,b){
    a=a*1;
    b=b*1;
    return a-b;
};
function multiply(a,b){
    a=a*1;
    b=b*1;
    return a*b;
};
function divide(a,b){
    a=a*1;
    b=b*1;
    return a/b;
};

function operate(operator, a, b){
    if(operator=='add'){
        return add(a,b);
    } else if(operator=='asubtract'){
        return subtract(a,b);
    } else if(operator=='amultiply'){
        return multiply(a,b);
    } else if(operator=='adivide'){
        return divide(a,b);
    }
};

let number = '';
let numbers = [];
let operators = [];
let inputNumbers = '';

const numButtons = document.querySelectorAll('#a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9, #a0');
const opButtons = document.querySelectorAll('#add, #asubtract, #amultiply, #adivide');
const equalButton = document.querySelector('#aequal');
const clearButton = document.querySelector('#cler');
const numOutputs = document.querySelector('.num-outputs');
const numInputs = document.querySelector('.num-inputs');
const allButtons = document.querySelectorAll('button');
const backButton = document.querySelector('#bckspce');

numberEvents();
operateEvents();
equalEvent();
clearEvent();
hovers();
/* backspace();

function backspace() {
    backButton.addEventListener('click', () => {
        if (isNaN(inputNumbers[(inputNumbers.length-1)])){
            operators.pop();
            inputDisplay('back');
        }
        else {
            number.slice(0,-1);
            inputDisplay('back');
        }
    });
}; */

function hovers() {
    allButtons.forEach((button) => {
        button.onmouseover = button.onmouseout = handler;
        function handler(event) {
            if (event.type == 'mouseover') {
                event.target.style.borderRightWidth = '1px';
                event.target.style.borderLeftWidth = '1px';
                event.target.style.borderBottomWidth = '4px';
            }
            if (event.type == 'mouseout') {
                event.target.style.borderRightWidth = '6px';
                event.target.style.borderLeftWidth = '6px';
                event.target.style.borderBottomWidth = '8px';
            }
        };
    });
};

function numberEvents() {
    numButtons.forEach((button) => {
        button.addEventListener('click', () => {
            number = number+button.id[1];
            inputDisplay(button.id[1]);
        });
    });    
};

function operateEvents() {
    opButtons.forEach((button) => {
        button.addEventListener('click', () => {
            finishNumber(button.id);
            inputDisplay(button.id);
        });
    });
};

function equalEvent() {
    equalButton.addEventListener('click', () => {
        evaluate();
        inputDisplay(equalButton.id);
    });
};

function clearEvent() {
    clearButton.addEventListener('click', () => {
        number='';
        numbers=[];
        operators=[];
        inputNumbers='';
        outputDisplay(clearButton.id);
        inputDisplay(clearButton.id);
    });
};

function evaluate(){
    numbers.push(number);
    number='';
    let outcome = operate(operators[0],numbers[0],numbers[1]);
    numbers = [outcome];
    operators = [];
    outputDisplay();
};

function finishNumber(operator){
    numbers.push(number);
    number='';
    operators.push(operator);
    if(numbers.length>1){
        console.log(numbers)
        let outcome = operate(operators[0],numbers[0],numbers[1]);
        numbers.splice(0,2,outcome);
        operators.shift();
        console.log(numbers)
        console.log(operators)
    }
    outputDisplay();
};

function outputDisplay(value){
    if (value=='cler'){
        numOutputs.textContent = '';
    }

    numOutputs.textContent = numbers[0];
};

function inputDisplay(value){
    if(value=='add'){
        value='+';
    }
    else if (value=='asubtract'){
        value='-';
    }
    else if (value=='amultiply'){
        value='x';
    }
    else if (value=='adivide'){
        value='/';
    }
    else if (value=='aequal'){
        value='=';
    }
    else if (value=='cler'){
        numInputs.textContent = '';
        return;
    }
    else if (value=='back'){
        inputNumbers=inputNumbers.slice(0,-1);
        numInputs.textContent = inputNumbers;
        return
    }
    inputNumbers = inputNumbers+value;
    numInputs.textContent = inputNumbers;
};


/* let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id =='cler'){
            //clear();
        }
        else if (button.id =='bckspce'){
            //backspace();
        }
        else if (button.id =='a-'||'a+'||'ax'||'a/'){
            finishNumber(button.id[1]);
            console.log(button.id[1])
            //updateDisplay(button.id);
        }
        else if (button.id ===
            'a1'||'a2'||'a3'||'a4'||'a5'||'a6'||'a7'||'a8'||'a9'||'a0'||'a.'){
            number = number+button.id[1];
            console.log(number)
        }
        else if (button.id =='a='){
            //operate();
            //updateDisplay(button.id);
        }
    });
});

function finishNumber(operator){
    numbers.push(number);
    number='';
    operators.push(operator);
    console.log(numbers)
    console.log(operators)
} */