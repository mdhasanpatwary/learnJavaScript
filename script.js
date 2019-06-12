// href attr output 5 / 17 / 2019
// function myFunction() {
//     var x = document.getElementById("myAnchor").href;
//     document.getElementById("demo").innerHTML = x;
// }




// //javascript query Selector
// document.querySelector('h3').style.color = 'red';

// //javascript math.round
// var round = Math.round(-12.5);
// document.write("Number after rounding : " + round + "<br />");




//Encrement and Decrement Operator

// var val = 53; qty = 88;

// val = ++qty;

// console.log('val = ' + val + ' qty = ' + qty);




//Window Popup box

// alert('Do want to save the data?');
// var pop = confirm('Do want to save the data?');
// var pop = parseInt(prompt('Enter Your Age'));
// document.write("<h1> Age = " + pop + " Type = " + typeof (pop) + "</h1>");





//Conditional statement

// var price = -100.50;
// if (price > 0) {
//     console.log('valid price');
// } else {
//     console.log('Invalid price');
// }





//Switch Case

// var choice = parseInt(prompt('Inter 1: for information, Inter 2: for jobs, Inter 3: for contact'));

// switch (choice) {
//     case 1: document.getElementById('demo').innerHTML = 'all of information will be here';
//         break;
//     case 2: document.getElementById('demo').innerHTML = 'all of jobs will be here';
//         break;
//     case 3: document.getElementById('demo').innerHTML = 'all contact information will be here';
//         break;
//     default: document.getElementById('demo').innerHTML = 'This Input is not valid';
// }





//Logical Operator

// && : return true if all condition are true
// || : return false if all condition are false
// ! : reverse the result

// var age = 24;
// if (age >= 18 && age < 18) {
//     console.log('You Can Vote.');
// } else if (age >= 18 || age < 18) {
//     console.log('You Can,t Vote');
// } else {
//     console.log('else executed');
// }






//While Loop

// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// var i = 1;
// while (i <= 6) {
//     document.write('<h' + i + '>' + 'This is javascript heading ' + i + ' </h' + i + '>');
//     i++;
// }






//Do While Loop
// var i = 9;
// do {
//     if (i % 2 == 1) {
//         console.log(i + ' ');
//     }
//     i++;
// }
// while (i < 5);







//For Loop

// for (var i = 10; i > 0; i--) {
//     console.log(i + ' ');
// }


// var num = 20;
// for (var i = 1; i <= 10; i++) {
//     console.log(num + ' x ' + i + ' = ' + (num * i));
// }





//Break and Continue

var i = 1;

// while(i <= 10) {
//     if(i%5 == 0) {
//         break;
//     }
//     console.log(i + ' ');
//     i++;
// }

// while (i <= 10) {
//     i++;
//     if (i % 5 == 0) {
//         continue;
//     }
//     console.log(i + ' ');
// }







//Default Parameters

// function productDetails(name, price, category = 'Ear Phone') {
//     console.log('Product Name = ' + name + ' Price = ' + price + ' category = ' + category);
// }
// var data = productDetails('Head Phone', 1000, 'Electric');
// var data = productDetails('Head Phone', 1000);  //This category show from default value






//Arrow Function

// var c;
// function add(a, b) {
//     c = a + b;
//     return c;
// }
// var z = add(10, 10);
// console.log(z);


// var add = (a, b) => (a + b); //this is arrow function 1 line close the function
// console.log(add(10, 10));




//Event 

// function fun1() {
//     console.log('One Click I am Trigared');
//     document.getElementById('demo').innerHTML = 'One Click Trigared';
// }
// function fun2() {
//     console.log('Double Click I am Trigared');
//     document.getElementById('demo').innerHTML = 'Double Click Trigared';
// }




//String Function

// var stm = ' this is string. i am learnign string';
// var s = stm.toUpperCase();
// var s = stm.charAt();
// var s = stm.charCodeAt();
// var s = stm.concat(' concat string');
// var s = stm.endsWith('string');
// var s = stm.startsWith('string');
// console.log(s);

// var email = 'mdhasan@yahoo.com';
// if(email.endsWith('@yahoo.com')) {
//     console.log('valid company email-id');
// } else {
//     console.log('please inter your valid company email-id');
// }

// var o = stm.indexOf('string');
// var p = stm.lastIndexOf('string');
// console.log(o);
// console.log(p);

// console.log(stm.length);
// console.log(stm.repeat(10));
// var t = stm.replace('string', 'JavaScript');
// console.log(t); //two values are not changed just 1 value changed!
// console.log(stm.substr(5, 10)); //count after first value
// console.log(stm.substring(5, 10)); //count from index
// console.log(stm.trim()); //count from index

// var n = stm.trim();
// console.log(n.length);
// console.log(stm.length);

// var numbers = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10';
// var rds = numbers.split(', ');
// console.log(rds);
// console.log(rds[2]);





//Math Functions

// console.log(Math.PI);
// console.log(Math.sqrt(1000));
// console.log(Math.random()*100);
// console.log(Math.round(Math.random()*100));
// console.log(Math.floor(10.6765));
// console.log(Math.pow(2,5));







//Date Functions

// var d = new Date();

// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getMonth());
// console.log(d.getSeconds());
// console.log(d.getTime());
// console.log(d.toLocaleTimeString());
// console.log(d.toDateString());
// console.log(d.toLocaleString());
// d.setFullYear(2000);
// console.log(d.toLocaleDateString());





// Array

// var names = ['vidya', 'balan', 'boice', 'picker'];

// console.log(names);
// console.log(names instanceof Array);

// var impId = new Array(9, 99, 57, 65, 67, 107);
// console.log(impId + ' type = ' + typeof (impId) + ' Array => ' + (impId instanceof Array));
// var impId = new Array(9);
// console.log(impId + ' type = ' + typeof (impId) + ' Array => ' + (impId instanceof Array));

// var courseName = ('web design', 'javascript', 'angular');
// console.log(courseName + ' type = ' + typeof (courseName) + ' Array => ' + (courseName instanceof Array));

// var courseName = ['web design', 'javascript', 'angular'];
// console.log(courseName + ' type = ' + typeof (courseName) + ' Array => ' + (courseName instanceof Array));








// Array Storage

// var values = [22, 32.21, 'JavaScript', Math.PI, new Date()];
// for (var i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }
// for (var val of values) {
//     console.log(val);
// }//Another way to execute the all array values




//Array Functions

// var productName = ['pen', 'Notes', 'Android', 'HeadPhone'];
// productName.push('Laptop');
// productName.unshift('Mobile');
// var ret = productName.pop(); console.log(ret);
// var ret = productName.shift(); console.log(ret);
// productName.reverse();
// productName.sort();

// console.log(productName);
// console.log(productName.indexOf('Notes'));
// console.log(productName.lastIndexOf('Notes'));





//Advanced Array Function

// var number = [1, 2, 3, 4, 5, 6];

// // number.splice(1, 0, 1111);
// number.fill('new value', 1, 3);
// console.log(number);

// var price = [100, 200, 300, 500, 50, 30, 20, -10];

// var newPrice = price.filter(val => val > 100, price);
// console.log(newPrice);

// var validatePrice = price.some(val => val > 0, price);
// console.log(validatePrice);

// var validatePrice = price.every(val => val > 0, price);
// console.log(validatePrice);

// var s = price.join(' -> ');
// console.log(s + ' "Type = ' + typeof(s) + '"');

// console.log(price.slice(1,4));






//Modify Html and css with id

// function fun1() {
//     var body = document.getElementsByTagName("body")[0];
//     body.innerHTML = '<h1 id="demo"></h1>';

//     var h = document.getElementById('demo');
//     h.innerHTML = 'JavaScript';
//     h.style.color = 'green';
//     h.style.backgroundColor = 'red';
//     h.style.borderRadius = '50px';
//     h.style.borderBottom = '5px solid green';
// }



//Access Element Using Class name

// function fun(){
//           var h =  document.getElementsByTagName('h2').item(1);
//           h.innerHTML = "This is using tag name";
//           h.style.color = "red";
//             var h = document.getElementsByClassName('cl1').item(0);
//             h.style.textAlign = "left";
//             h.style.color = "blue";
// }



//Access element using name  /  for input field

// function getvalues(){
//     var name = document.getElementsByName('user').item(0).value;
//     var age = document.getElementsByName('age').item(0).value;
//     alert("Name="+name+" Age="+age);    
// }




//Handeling Mouse Event

//<div id="div1" onmouseover="mover(this)" onmouseout="mout(this)">//this one for html file
// function mover(d){
//     document.getElementById('div1').style.backgroundColor="red";
//     d.style.backgroundColor="red";
// }
// function mout(d){
//     document.getElementById('div1').style.backgroundColor="blue/";
// d.style.backgroundColor="blue";
// } 


//Events: Focus and blur

{/* <form>
Name:<input type="text" onfocus="focusfun(this)" onblur="blurfun(this)"><br>
Age:<input type="number" onfocus="focusfun(this)" onblur="blurfun(this)"><br>
<input type="submit">
</form> //for html file */}

// function focusfun(inputfield){
//   inputfield.style.backgroundColor="green"; 
// } 
// function blurfun(inputfield){
//   inputfield.style.backgroundColor="white";
// }    




//Events: Change and Select

{/* <input type="text" value="JavaScript" onchange="changefun()" onselect="selectfun(this)"> */ } //this tag for html document

// function changefun(){
//     alert("Don't change the value");
// }
//     function selectfun(val){
//        // alert("You selected the text");
//         val.style.color="red";
//     }




//Keyboard Event

// Name: <input type="text" onkeyup="convertToUpper(this)">
//    Enter a Key:<input type="text" onkeydown="getKey(event)">
//    <p id="pid"></p>

// //    function convertToUpper(namebox){
// //       namebox.value = namebox.value.toUpperCase(); 
// //    }
//       function getKey(event){
//           document.getElementById('pid').innerHTML = "Key="+event.key+" Keycode="+event.keyCode;
//       } 





//Cut, Copy and paste event

{/* <p oncopy="copyFun()">This is JavaScript </p>
    <input type="text" value="JavaScript" oncut="cutFun()" onpaste = "pasteFun(this)"> */}

// function cutFun(){
//     alert("Don't cut the value");
// }
// function copyFun(){
//     console.log("Don't copy...");
// } 
// function pasteFun(e){
//    e.style.backgroundColor="yellow"; 
// }  



//SetTimeOUt

// function winload() {
//     setTimeout(msg, 3000);
// }
// function msg() {
//     alert('window lod fired');
// }


// var d = document.getElementById('mainbody');

// function winload() {
//     d.style.backgroundColor = "red";
//     setTimeout(green, 3000);
// }
// function green() {
//     d.style.backgroundColor = "green";
//     setTimeout(blue, 3000);
// }
// function green() {
//     d.style.backgroundColor = "blue";
//     setTimeout(winload, 3000);
// }





//Start Interval

// var m;

// function startInterval() {
//     m = setInterval(msg, 2000);
// }

// function msg() {
//     alert('Start Interval Function Fired');
// }

// function removeInterval() {
//     clearInterval(m);
// }





//How to create a digital clock?

function dClock() {
    setInterval(clock, 1000);
}
function clock() {
    var d = new Date();
    document.getElementById('clock').innerHTML = d.toLocaleTimeString();
}