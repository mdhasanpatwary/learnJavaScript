//Javascript Bind Call and Apply Method  /  lecture-17



//Example One


// function printMe() {
//     console.log('Hello ' + this.name);
// }

// var obj1 = {
//     name: 'Adhara',
//     age: 19
// }

// var obj2 = {
//     name: 'Trishan',
//     age: 25
// }

// var binded1 = printMe.bind(obj1);
// var binded2 = printMe.bind(obj2);

// binded1();
// binded2();

// printMe.call(obj1);
// printMe.call(obj2);










//Example Two

function sum(a, b) {
    return (a + b) * this.c;
}

var obj1 = {
    c: 3
}

var obj2 = {
    c: 5
}




//Bind Method
var binded1 = sum.bind(obj1);
var binded2 = sum.bind(obj2);
console.log(binded1(5, 10));
console.log(binded2(5, 10));


//Another Bind Method
var binded1 = sum.bind(obj1, 5, 10);
var binded2 = sum.bind(obj2, 5, 10);
console.log(binded1());
console.log(binded2());



//Call Method
var res1 = sum.call(obj1, 10, 5);
var res2 = sum.call(obj2, 10, 5);
console.log(res1);
console.log(res2);


//Apply Method
var res1 = sum.apply(obj1, [10, 5]);
var res2 = sum.apply(obj2, [10, 5]);
console.log(res1);
console.log(res2);
