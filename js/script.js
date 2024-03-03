let screen = document.getElementById('screen');
let clean = false;
function appendToScreen(value) {
  if (clean) {
    clearScreen();
    clean = false;
  }
  screen.value += value;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function division(a, b) {
  // Manejar la división por cero
  if (b === 0) {
    return 'Error: División por cero';
  }
  return Math.round(a / b * 10 ** 10) / 10 ** 10;
}
function clearScreen() {
  screen.value = '';
}



function calculate() {
  let result;
  let errorMessage='Error: ' + screen.value ;
  let expression = screen.value.trim(); // Obtener la expresión matemática desde la pantalla
  let operands = expression.split(/[\+\-\*\/]/); // Dividir la expresión en operandos usando operadores como separadores
  let operator = expression.match(/[\+\-\*\/]/); // Obtener el operador de la expresión
  
  try {
    if (operands.length < 2 || operands[1]=== '') {
      screen.value = errorMessage;
      console.log('operands.length < 2 '); 
      clean = true;
      return;
    }
    
    let num1 = parseFloat(operands[0]);
    let num2 = parseFloat(operands[1]);
    
    // Utilizar la función correspondiente al operador
    switch (operator[0]) {
      case '+':
        result = add(num1, num2);
        console.log('add function'); 
        break;  
      case '-':
        result = subtract(num1, num2);
        console.log('subtract function'); 
        break;
      case '*':
        result = product(num1, num2);
        console.log('product function' + ' operator.length:' + operator.length +
        ' operands.length ' +operands.length  + ' operands[0]' + operands[0] + ' operands[1]' + operands[1] +' operator[0]' + operator[0]); 
        break;
      case '/':
        result = division(num1, num2);
        console.log('division function'); 
        break;
      default:
        result = errorMessage +'Operador no válido';
    }
  } catch (error) {
    console.log(error); 
    result = errorMessage ;
    clean = true;
  }
  screen.value = result;
}