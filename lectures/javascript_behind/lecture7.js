//Javascript Behind The Scene Execution Stack Vs Scope Chain  /  lecture-7



var a = 10;


A();

function A() {
    var b = 5;

    B();
    function B() {
        var c = 15;

        C(b, c);
    }
}

function C(b, c) {
    var d = 20;

    console.log(a + b + c +d);
}