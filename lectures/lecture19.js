// Javascript Inheritance with Prototype  /  lecture-17



//Example One

// function Person() {
//     this.name = "Adhara";
// }

// function Teacher() {
//     Person.call(this)
//     this.subject = "JavaScript"
// }

// var teacher = new Teacher();

// var name = teacher.name;

// console.log(name);






//Example Two

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printName = function() {
    console.log('Name: ' + this.name);
}

Person.prototype.another = function() {
    console.log('Age: ' + this.age);
}

function Student(name, id, age) {
    Person.call(this, name, age);
    this.id = id;
}

Student.prototype = Object.create(Person.prototype);
// Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.constructor = Student;

var student = new  Student('Adhara', 1632, 32);

// Person.prototype.another = function() {
//     console.log('Age: ' + this.age + ' Copy Test Purpose');
// }

Person.prototype.skill = ['Java Script', 'html', 'css', 'bootstrap']

student.another();
console.log(student);
