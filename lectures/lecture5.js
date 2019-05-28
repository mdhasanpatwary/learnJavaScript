//JavaScript Higher Order Function
//Higher Order function tar argument hisebe R 1ti function k nay! and proyojone R 1ta function k return krta pare! and obossoy saita pure function hoite hova!
//Example One

var number = [6, 7, 5, 2, 4, 1, 3];

function cbf(a) {
    console.log(a);
}
number.forEach(cbf);

// number.forEach(function(a){
//     console.log(a);  
// });

//Example Two
function caller() {
    return function (name) {
        return 'Caller Calling You ' + name;
    }
}
// var x = caller();
// var y = x('Md Hasan Patwary');
// y;
// var z = x('Patwary');
// z;
var a = caller()('Md_Hasan Patwary');
a;
