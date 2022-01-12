const num1 = 5;
const num2 = 10;

function addValues(){
    console.log("the sum is: %s",(num1 + num2));
}

//when assigning a function inside a module, this will be called when require is invoke even in the event of not being placed in a variable and being invoked
//through the variable. 
addValues();