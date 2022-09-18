
function operate(operator, num1 = 0, num2 = 0) {
    if (operator == '+') {
        return num1 + num2
    }
    else if (operator == '-') {
        return num1 - num2
    }
    else if (operator == '*') {
        return num1 * num2
    }
    else if (operator == '/') {
        return num1 / num2
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
    let display = document.querySelector('.display')
    if (e.target.className == 'numberButton') {
        display.textContent += e.target.id
    }

    else if (e.target.className == 'operator') {
        thenum1 = Number(display.textContent)
        
        theoperator = (document.querySelector(`#${e.target.id}`)).textContent
        
        
    }

    else if(e.target.id == 'equals') {
        thenum2 = Number(display.textContent)
        console.log(thenum1) //num
        console.log(theoperator) //str
        console.log(thenum2) //num
        console.log((e.target).textContent)
        
        operation = operate(theoperator, thenum1, thenum2)
        display.textContent = operation
        thenum1 = operation
    }

    else if(e.target.id == 'clear'){
        thenum1 = 0
        thenum2 = 0
        display.innerHTML = '<br>'
    }
}));