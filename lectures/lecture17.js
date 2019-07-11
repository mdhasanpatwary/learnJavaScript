//Javascript Prototype  /  lecture-17




//Example One

// function person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.hello = function() {
//         console.log("Hello - " + this.name);
//     }
// }




function person(name, age) {
    this.name = name;
    this.age = age;
}

// person.prototype.hello = function() {
//     console.log("Hello - " + this.name);
// }

// person.prototype.print = function() {
//     console.log(this.name, this.age);
    
// }
// person.prototype.email = "adhara@gmail.com";


person.prototype = {
    hello: function() {
        console.log('Hello ' + this.name);
    },

    print: function() {
        console.log(this.name, this.age);
    },

    email: 'adhara@gmail.com'
}



var p1 = new person("Adhara", 19);
var p2 = new person("Trishan", 25);

console.log(p1);
console.log(p2);

// console.log(person.prototype);

