//Javascript Behind The Scene Hoisting and Variable Object Creation  /  lecture-4



//when a variable object create
    // 1. the argument Object is created
    // 2. code is scanned for variable diclaration
    // 3. code is scanned for function diclaration



//The way javaScript engine declare and define
//variable and functions are totaly different

// It store empty variabe and initialize it with undefined
// And store function referance. That's way we can call initialy

// What does it mean by Hoisting?
// Hoisting means they are abailable before excuting starts



console.log(x);

var x = 10;



function print(name) {
    console.log(name);
}

print('Adhara');