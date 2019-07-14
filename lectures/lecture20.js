//Javascript New Keyword  /  lecture-20



//Example One


function Animal(name) {
    this.name = name;
}

Animal.prototype.printName = function() {
    console.log(this.name);
}

function myNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    // console.log(arguments);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}
var leave = myNew(Animal, 'Adhara');

leave.printName();

// var cat = new Animal('cat');
// var dog = new Animal('dog');
// console.log(cat, dog);

// dog.printName();



function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = myNew(Person, 'Adhare', 19);
console.log(p1);

