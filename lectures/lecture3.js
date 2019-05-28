// Inner Function 5/20/2019 class-3

function outer() {
    function inner() {
        console.log("This is inner function");
    }
    console.log("This is Outer function");
}
outer();

// Multi inner function
function calc(a, b) {

    function sum() {
        return a + b;
    }

    function sub() {
        return a - b;
    }

    function into() {
        return a * b;
    }

    function devided() {
        return a / b;
    }

    return sum() + sub() + into() + devided();
}
var result = calc(10, 5);
console.log(result);
result;


function add(a, b) {
    return a + b;
}
var result = add(20, 30);
result;