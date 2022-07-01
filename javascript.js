//list of matching selectors
const numbers = document.querySelectorAll('#num');
const currScreen = document.querySelector('.currentScreen');
const clear = document.querySelector('#clear');

numbers.forEach((button)=>button.addEventListener('click', () =>addNumber(button.textContent)));
clear.addEventListener('click', clearNumbers);

console.log(numbers);

//-------------------display-update methods:-------------------

function addNumber(number){
    currScreen.textContent += number;
}

function clearNumbers(){
    currScreen.textContent = null;
}
//-------------------calculator operations:-------------------
const add = (a,b)=> a + b;
const subtract = (a,b) => a-b;
const divide = (a,b)=>a/b;
const multiply = (a,b)=>a*b;
const operate = function(operator, b, c){
    console.log(operator(b,c));
    return operator(b,c);
}




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
