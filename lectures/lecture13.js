//Javascript Reduce Function  /  lecture13

// var num = [5, 9, 4, 3, 6];

// var sum = 1;

// for(var i = 0; i < num.length; i++) {
//     sum *= num[i];
// }
// console.log(sum);



//Use Reduce Function

var num = [5, 9, 4, 3, 6];

var res = num.reduce(function(a, b) {
    return a + b;
});
console.log(res);
