//Javascript This Keyword and Bind Method  /  lecture-16




//Example One


// var obj = {
//     name: "Adhara", 

//     print: function() {
//         console.log(this.name);
        
//     }
// }

// obj.print();


// function myfunc() {

//     function inner() {
//         console.log(this);
        
//     }

//     new inner();
// }










//Example Two

// var person = {
//     name: "Adhara",

//     print: function() {
//         console.log('Hello - ' + this.name);
//     }
// }

// person.print();

// var myPrint = person.print;
// console.log(myPrint);


// var herName = person.name;
// console.log(herName);

// var myPrint = person.print;
// console.log(myPrint);


// var myPrint = function() {
//     console.log('Hello - ' + this.name);
// }

// var myPrint = person.print.bind(person);
// myPrint();








//Example Three

// function add(num) {
//     return this.value + num;
// }

// add(10);
// var result = add(10);

// var obj1 = {
//     value: 20
// }

// var obj2 = {
//     value: 50
// }

// var binded = add.bind(obj1);
// var result = binded(30);


// console.log(result);








//Example Four / Set Time Out


// var person = {
//     name: "Adhara",

//     print: function() {
//         var name = this.name; //when this keyword out of setTimeOut function then this keyword is working. below this keyword in the setTimeOut function so not working.

//          setTimeout(function() {
//              console.log("Hello " + name);  
//          }, 2000);
//     }
// }
// person.print();




var person = {
    name: "Adhara",

    print: function() {
         setTimeout(function() {
            //  console.log(this); /when this keyword in setTimeOut function then that is not working reason now this keyword meaning global object!
             
             console.log("Hello " + this.name);  
         }.bind(this), 2000);
    }
}


person.print();

