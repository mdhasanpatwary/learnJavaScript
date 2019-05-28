// JavaScript firstClass function, first class function hota hola nicher 6ti gunagun thakte hova 5/19/2019 class-2
// 01: A function can be stored A variable

function sayName(name) {
    return 'Hello, ' + name;
}
var hello = sayName;
var anotherHello = hello;
var result = hello('Md hasan');
console.log(result);

// 02: A function can be stored A array
var array = [1, 2, 3, sayName];
array.push(hello);
console.log(array);

// 03: A function can be stored as an object field or property

var person = {
    name: 'hasan',
    age: 28,
    callfunction: anotherHello,
    print: function () {
        console.log('Hi');
    }
}
person;
console.log(person);

// 04: We can create function as needed

var sum = 10 + (function () { return 80 })();
console.log(sum);
sum;

// 05: We can pass function as an arguments

function wow(name, fun) {
    return fun(name);
}
var resul = wow('md hasan', sayName);
console.log(resul);

// 06: We can return function from another function

function base(b) {
    return function (n) {
        var result = 1;

        for (var i = 0; i < b; i++) {
            result *= n;
        }
        return result;
    }
}
var power = base(3);
var result = power(5);
var result = base(3)(5);
console.log(result);
result;