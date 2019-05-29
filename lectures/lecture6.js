//CallBack function / lecture-6
//Example-1

// function hello(name) {
//     print(name);
//     print('something else');
// }

// function print(args) {
//     console.log(args);

// }
// hello('Md_Hasan');





//Example-2

// function hello(name) {
//     print(name);
// }
// hello('Md_Hasan', print);

// function print(args) {
//     console.log(args);
// }




//Example-3

// function hello(name, print) {
//     print(name);
// }

// hello('Md_Hasan', function (args) {
//     console.log('Hello ' + args);
// });

// hello('Md_Hasan', function (args) {
//     console.log('Hi, How are You ' + args + '?');
// });

// hello('Netherlands is a good country', function (args) {
//     console.log('length of ' + args + ' = ' + args.length);
// });




//Example-4

var me = {
    name: 'MD_Hasan',
    age: 4,
    email: 'md.hasan.69q@gmail.com'
}

function printMySelf(person, callback) {
    console.log('Person : ' + person.name + ' (' + person.age + ')');

    if (person.age >= 18) {
        callback(person.email);
    } else {
        console.log('You are not elegible for this email');
    }
}

printMySelf(me, function (email) {
    console.log('Email Sent To : ' + email);

});





//Example-5

function print(data, callback1, callback2) {
    console.log('Original Data ', data);
    callback1(data);
    callback2(data);
}
print('Demo Data', function (data) {
    var data = data.toUpperCase();
    console.log('uppercase: ' + data);
}, function (data) {
    var data = data.toLowerCase();
    console.log('lowercase: ' + data);
    console.log('Demo Data Length: ' + data.length);

});