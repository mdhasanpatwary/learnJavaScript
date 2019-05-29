// console log function output 5 / 18 / 2019 class-1
function getAddition(firstNumber, secondNumber) {
    var result = firstNumber + secondNumber;
    return result;
}
var t = getAddition(10, 20);
console.log(t);

//symple function
function myFunction() {
    document.write("This is a simple function.<br />");
}
myFunction();

// Count Vowels
var count = 0;
function countVowels(name) {
    for (var i = 0; i < name.length; i++) {
        if (name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
            count = count + 1;
    }
    document.write("Hello " + name + "!!! Your name has " + count + " vowels" + "<br/>");
}
var myName = prompt("enter your name");
countVowels(myName);

// if else statement
var z = false;
if (z) {
    console.log(z);
} else {
    console.log(z);
}

// loop Time
// loop ta complite hoite koto somoy lage saita count korba
console.time('loopcount');
for (i = 0; i <= 1000; i++) {
    console.log('hello');
}
console.timeEnd('loopcount');

// javascript array and object
// javascript array er vitore object, and console.table use krla console ta table hisebe dikhave
var tables = [
    { name: 'azim', skill: 'java, c#, c++' },
    { name: 'rubel', skill: 'java, c#, c++, ruby' },
    { name: 'kamal', skill: 'java, c#, c++, python' }
]
console.table(tables);

//console Group
//kibabe onak gulo element k group kora dekhte hoy! jokhon onak beshi console output thakbe tokhon group kora dekhle alomelo hova na
console.group('Group1');
console.log('tarana halim');
console.log('tarana begum');
console.log('tarana karim');
console.groupEnd('Group1');

console.group('Group2');
console.log('tarana halim');
console.log('tarana begum');
console.log('tarana karim');
console.groupEnd('Group2');

// button dom

var button = document.querySelector('#button');
console.log(button);
console.dir(button);

// javaScript Sum Function

function returnSum(first, second) {
    var sum = first + second;
    return sum;
}
var firstNo = 78;
var secondNo = 22;
console.log(firstNo + " + " + secondNo + " = " + returnSum(firstNo, secondNo));