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


//const numInputs = document.querySelector('.num-inputs');
//function updateDisplay(){
//    numInputs.textContent = numDisplay;
//};

let number = '';
let numbers = [];
let operators = [];

const numButtons = document.querySelectorAll('#a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9, #a0');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        number = number+button.id[1];
    })
})

const opButtons = document.querySelectorAll('#add, #asubtract, #amultiply, #adivide');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        finishNumber(button.id)
    })
})

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