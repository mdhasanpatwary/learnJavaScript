//Javascript Return a Function from Another Function / Lecture-7


//Example-1

// function host() {
//     console.log('I am a Host function...');
//     return function () {
//         console.log('I am a child function');

//     }
// }
// var a = host();
// console.log(a());
////a();



//Example-2

function host() {
    console.log('I am a Host function...');
    function child() {
        console.log('I am a child function');
    }
    return child;
}
var a = host();
//console.log(a());
a();



//Example-3

// function grettings(msg) {
//     return function(name) {
//        console.log(msg + ' ' + name);  
//     }
// }

// var morning = grettings('Good Morning');
// var hello = grettings('Hello');

// morning('Lecture7');
// hello('Lecture7');




//Example-4

function grettings(msg) {
    function inner(name) {
        console.log(msg + ' ' + name);
    }
    return inner;
}

var morning = grettings('Good Morning');
var hello = grettings('Hello');

morning('Lecture7');
hello('Lecture7');