//Javascript Postmortem of Closure  /  Lecture-8

//Example-1

// var name = 'MD_Hasan';
// function sayName() {
//     console.log('Hello ' + name);
// }
// console.dir(sayName);
// sayName();


//Example-2

function grettings(msg) {
    return function (name) {
        console.log(msg + ' ' + name);
    }
}

var hello = grettings('Hello');
hello('Md_Hasan');