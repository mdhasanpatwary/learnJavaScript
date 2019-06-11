//Javascript Map Function Implementation

var arr = [5, 7, 9, 11, 13, 15];

//this function added 2 in array all values

// var mappedarr = [];
// for (var i = 0; i < arr.length; i++) {
//     mappedarr.push(arr[i] + 2);
// }
// console.log('Mapped Array = ' + mappedarr);



//Same work done use Map function
var maparr = arr.map(function (value) {
    return value + 2;
});

console.log('Mapped Array = ' + maparr);



//Make Map function

function myMap(arr, callback) {
    var newarr = [];

    for (var i = 0; i < arr.length; i++) {
        var data = callback(arr[i]);
        // newarr.push(callback(arr[i]));
        newarr.push(data);
    }
    return newarr;
}

var myarr = myMap(arr, function (value) {
    return value * 2;
});

console.log(myarr);
