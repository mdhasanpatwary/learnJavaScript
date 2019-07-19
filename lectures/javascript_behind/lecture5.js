//Javascript Behind The Scene Function Expression vs Declaration  /  lecture-5


//Declaration function
declaration();
function declaration() {
    console.log('Im diclare function. call from anywhere...');
}
declaration();





//Expression function

console.log(expression);

//expression();
var expression = function() {
    console.log('Im expression function...');
}
expression();
console.log(expression);
