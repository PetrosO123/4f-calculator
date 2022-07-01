const add = (a,b)=> a + b;

const subtract = (a,b) => a-b;

const divide = (a,b)=>a/b;

const multiply = (a,b)=>a*b;

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

const operate = function(operator, b, c){
    console.log(operator(b,c));
    return operator(b,c);
}
operate(factorial, 3);