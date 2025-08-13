let x = 10;
let y = 20;

function add(a,b){
    return a + b;
}

let result = add(x, y);
console.log("The result of adding", x, "and", y, "is:", result);

let z = 0;

function divide(a,b){
    if(b == 0){
        throw 'Division by Zero';
    }
    return a/b;
}

let result2 = divide(x,z);
console.log("The result of dividing", x, "and", z, "is", result2);