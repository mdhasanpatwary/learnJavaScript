// Javascript Filter Function Implementation  /  class-11**

//Example-1  /  with all lenguage common function*

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var newArr = [];

// for(var i = 0; i < arr.length; i++) {
//     if(arr[i]%2 == 1){
//         newArr.push(arr[i]);
//     }
// }

// console.log('newArray = ' + newArr);


//Example-2  /  with Default function*

// var newarr = arr.filter(function(val) {
//     return val % 2 == 1;
// });
// console.log('New Array = ' + newarr);




//Example-3  /  Create filter function*

function myFilter(arr, callback) {
    var newarray = [];

    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newarray.push(arr[i]);
        }
    }
    return newarray;
}

var myarr = myFilter(arr, function (element) {
    return element % 2 == 1;
});

console.log(myarr);
