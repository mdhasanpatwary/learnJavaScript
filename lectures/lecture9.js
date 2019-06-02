// Javascript Sort Array of Object  /  class-9


//Example-1

// var arr = [56, 45, 89, 98, 6, 58, 87, 55, 545, 5652, 65, 546];

// arr.sort(function (a, b) {
//     return b - a; // b-a for desending order,,, a-b for assending order
// }); //only sort function is not properly working with out callback function

// console.log(arr);



//Example-2

var people = [
    { name: 'Hasan', age: 24 },
    { name: 'Hasem', age: 33 },
    { name: 'Kasem', age: 18 },
    { name: 'Taher', age: 28 },
    { name: 'Sojib', age: 40 },
    { name: 'Asif', age: 16 },
    { name: 'Monir', age: 64 },
    { name: 'Sumon', age: 35 }
];

// people.sort(function(a, b) {
//    return b.age - a.age;
// });

people.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});

console.log(people);
