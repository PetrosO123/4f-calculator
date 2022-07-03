//list of matching selectors
const numbers = document.querySelectorAll('#num');
const operators = document.querySelectorAll('#operator');
const currScreen = document.querySelector('.currentScreen');
const lastScreen = document.querySelector('.lastScreen');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

//adding event listeners for number/operator/clear buttons
numbers.forEach((button)=>button.addEventListener('click', () =>addNumber(button.textContent)));
operators.forEach((button)=>button.addEventListener('click', () =>addOperator(button.textContent)));
clear.addEventListener('click', clearNumbers);
equals.addEventListener('click', () =>operate(lastScreen.textContent.slice(-1), lastScreen.textContent.slice(0, -1), currScreen.textContent));

// console.log(numbers);

//-------------------display-update methods:-------------------

function addNumber(number){
  // let a = lastScreen.textContent.slice(-1);
  // if (isNaN(a)){
  //   console.log('yes');
  //   currScreen.textContent = null;
  // }
  currScreen.textContent += number;
  // console.log("This is the value: " + lastScreen.textContent)
  // console.log(`this is a: ${a}`);
}

function addOperator(operator){
  let a = lastScreen.textContent.slice(-1);
  if (isNaN(a)){
    operate(lastScreen.textContent.slice(-1), lastScreen.textContent.slice(0, -1), currScreen.textContent);
    console.log('yes');
  }
  lastScreen.textContent = currScreen.textContent;
  lastScreen.textContent += ' ';
  lastScreen.textContent += operator;
  currScreen.textContent = null
}

function clearNumbers(){
  currScreen.textContent = null;
  lastScreen.textContent = null;
}
//-------------------calculator operations:-------------------
const add = (a,b)=> parseInt(a.slice(0,-1)) + parseInt(b);
const subtract = (a,b) => a-b;
const divide = (a,b)=>a/b;
const multiply = (a,b)=>a*b;
const operate = function(operator, b, c){
  if (operator == '×'){
    lastScreen.textContent = null;
    currScreen.textContent = multiply(b,c);
    return;
  }
  else if (operator == '+'){
    lastScreen.textContent = null;
    currScreen.textContent=add(b,c);
    return;
  }
  else if (operator == '-'){
    lastScreen.textContent = null;
    currScreen.textContent = subtract(b,c);
    return;
  }
  else if (operator == '/'){
    lastScreen.textContent = null;
    currScreen.textContent = divide(b,c);
    return;
  }
  else{
    console.log("ERROR");
    return null
  }
}


//-------------------potential future operations:-------------------
const sum = function(a){
  let total = 0;
  for (let i = 0; i<a.length; i++){
    total+=a[i];
  }
  return total;
};
const multiplyTotal = function(b){
  if (b.length !== 0){
    total = b[0];
  }
  for (let j = 1; j<b.length; j++){
    total*=b[j];
  }
  return total;
};
const power = (a,b) => a**b;
const factorial = function(a) {
  let total = 1;
  for (let i = a; i>0; i--){
    // console.log("This is i: " + i)
    total*=i;
  }
  return total;
  
};
