//Javascript Foreach Function Implementation  /  Class-10

//Example-1

// var arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(function(element, index, arr) {
//     console.log('Element is = ' + element + ' Index is = ' + index + ' arr is = ' + arr);  
// });



//Example-2
var arr = [1, 2, 3, 4, 5, 6];
// function loop(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// loop(arr);

function loop(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
loop(arr, function (element, index, arr) {
    console.log('Element is ' + element + ' Index is = ' + index + ' array is = ' + arr);

});