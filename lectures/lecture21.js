//Javascript __protoo__ vs Prototype  /  lecture-20



//Example One

function Obj(a, b) {
    this.a = a;
    this.b = b;
}

function Obj2(a, b, c) {
    Obj.call(this, a, b);
    this.c = c;
}

function Obj3() {
    Obj2.call(this, 10, 15, 20);
}

// Obj.prototype = {};  //overwrite the obj's prototype

Obj2.prototype = Object.create(Obj.prototype);
Obj3.prototype = Object.create(Obj2.prototype);

var obj1 = new Obj(1, 2);
var obj2 = new Obj2(3, 4, 5);
var obj3 = new Obj3();

console.log(obj1);
console.log(obj2);
console.log(obj3);
