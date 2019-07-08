//Javascript Constructor Pattern  /  lecture-15


//Creating Books

// var books = [
//     {
//         name: "Shubro",
//         author: "humayun ahmed"
//     },
//     {
//         name: "Himu",
//         author: "humayun ahmed"
//     },
//     {
//         name: "Misir Ali",
//         author: "humayun ahmed"
//     }
// ];
// console.log(books);



//Creating Basic Class (Another Name Is: "Constractor Pattern")
//Class Name first letter need to use Uppercase.

// function Person(name, email) {
//     // var obj = {};  //"new" kerword creating this type object that not shown mine.
//     // without "new" keyword "this" keyword is global(valueless). 

//     this.name = name;
//     this.email = email;

//     this.out = function() {
//         console.log('Email: ' + this.email);
//     }
// }
// var p1 = new Person('ripon', 'ripon@gmail.com');
// var p2 = new Person('jit banik', 'jit.banik@gmail.com');
// var p3 = new Person('Mehedi', 'mehedi@gmail.com');
// var people = [p1, p2, p3];

// people.forEach(function(person) {
//     //console.log('Name: ' + person.name);
//     person.out();
    
// });

// for (var props in p1) {
//     console.log('Properties: ' + props);
// }


// console.log(people);
// console.log(p1.name);
// console.log(p1.email);
// console.log(p1);







//Creating Book Class

function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book('Holud Himu', 'Humayun Ahmed', 122);
console.log(book.constructor);
