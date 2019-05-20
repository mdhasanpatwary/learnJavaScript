//href attr output 5/17/2019
// function myFunction() {
//     var x = document.getElementById("myAnchor").href;
//     document.getElementById("demo").innerHTML = x;
// }

// //javascript query Selector
// document.querySelector('h3').style.color = 'red';

// //javascript math.round
// var round = Math.round(-12.5);
// document.write("Number after rounding : " + round + "<br />");



// console log function output 5/18/2019 class-1
// function getAddition(firstNumber, secondNumber) {
//     var result = firstNumber + secondNumber;
//     return result;
// }
// var t = getAddition(10, 20);
// console.log(t);

// //symple function
// function myFunction() {
//     document.write("This is a simple function.<br />");
// }
// myFunction();

//Count Vowels
// var count = 0;
// function countVowels(name) {
//     for (var i = 0; i < name.length; i++) {
//         if (name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
//             count = count + 1;
//     }
//     document.write("Hello " + name + "!!! Your name has " + count + " vowels" + "<br/>");
// }
// var myName = prompt("enter your name");
// countVowels(myName);

//if else statement
// var z = false;
// if (z) {
//     console.log(z);
// } else {
//     console.log(z);
// }

//loop Time
//loop ta complite hoite koto somoy lage saita count korba
// console.time('loopcount');
// for (i = 0; i <= 1000; i++) {
//     console.log('hello');
// }
// console.timeEnd('loopcount');

//javascript array and object
//javascript array er vitore object, and console.table use krla console ta table hisebe dikhave
// var tables = [
//     { name: 'azim', skill: 'java, c#, c++' },
//     { name: 'rubel', skill: 'java, c#, c++, ruby' },
//     { name: 'kamal', skill: 'java, c#, c++, python' }
// ]
// console.table(tables);

// //console Group
// //kibabe onak gulo element k group kora dekhte hoy! jokhon onak beshi console output thakbe tokhon group kora dekhle alomelo hova na
// console.group('Group1');
// console.log('tarana halim');
// console.log('tarana begum');
// console.log('tarana karim');
// console.groupEnd('Group1');

// console.group('Group2');
// console.log('tarana halim');
// console.log('tarana begum');
// console.log('tarana karim');
// console.groupEnd('Group2');

//button dom

// var button = document.querySelector('#button');
// console.log(button);
// console.dir(button);

//javaScript Sum Function

// function returnSum(first, second) {
//     var sum = first + second;
//     return sum;
// }
// var firstNo = 78;
// var secondNo = 22;
// console.log(firstNo + " + " + secondNo + " = " + returnSum(firstNo, secondNo));


//JavaScript firstClass function, first class function hota hola nicher 6ti gunagun thakte hova 5/19/2019 class-2
// 01: A function can be stored A variable

// function sayName(name) {
//     return 'Hello, ' + name;
// }
// var hello = sayName;
// var anotherHello = hello;
// var result = hello('Md hasan');
// console.log(result);

// // 02: A function can be stored A array
// var array = [1, 2, 3, sayName];
// array.push(hello);
// console.log(array);

// 03: A function can be stored as an object field or property

// var person = {
//     name: 'hasan',
//     age: 28,
//     callfunction: anotherHello,
//     print: function () {
//         console.log('Hi');
//     }
// }
// person;
// console.log(person);

// 04: We can create function as needed

// var sum = 10 + (function () { return 80 })();
// console.log(sum);
// sum;

// // 05: We can pass function as an arguments

// function wow(name, fun) {
//     return fun(name);
// }
// var resul = wow('md hasan', sayName);
// console.log(resul);

// 06: We can return function from another function

// function base(b) {
//     return function (n) {
//         var result = 1;

//         for (var i = 0; i < b; i++) {
//             result *= n;
//         }
//         return result;
//     }
// }
// var power = base(3);
// var result = power(5);
// var result = base(3)(5);
// console.log(result);
// result;


//Inner Function 5/20/2019 class-3

// function outer() {
//     function inner() {
//         console.log("This is inner function");
//     }
//     console.log("This is Outer function");
// }
// outer();

//Multi inner function
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
