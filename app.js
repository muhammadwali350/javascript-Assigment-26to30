// TASK 1

// var number = +prompt("enter a number");
// var roundoffNum = Math.round(number);
// var ceilNum = Math.ceil(number);
// var floorNum = Math.floor(number);
// if(number > 0 ){
// document.write("number that you enter is :" + number + "</br>" + "round off number is :" + roundoffNum + "</br>" + "ciel number is :" + ceilNum + "</br>" +  "floor Number is :" + floorNum)

// }
// else{
//     alert ("please enter a number")
// }


// TASK 2

// var number = +prompt("enter a number");
// var roundoffNum = Math.round(number);
// var ceilNum = Math.ceil(number);
// var floorNum = Math.floor(number);
// if(number < 0 ){
// document.write("number that you enter is :" + " " + number + "</br>" + "round off number is :" + " " + roundoffNum + "</br>" + "ciel number is :" + " " + ceilNum + "</br>" +  "floor Number is :" + " " + floorNum)


// }
// else{
//     alert ("please enter a number")
// }


// TASK 3

// var number = +prompt("enter a number");
// var newNumber = Math.abs(number);
// alert("The absolute number is : "  + " " + newNumber);


// TASK 4 

// var number;
// var newNumber = Math.random()*6+1;
// console.log(newNumber.toFixed(0));


// TASK 5

// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     var playerOne = prompt("enter player one");
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1){
//     var playerTwo = prompt("enter player two");
//     document.write("1 <br> Random Coin Value: Tails")
// }


// TASK 6

// var randomNum = Math.random(Math.round())*100
// document.write("The random number between 1 and  100 is :" + " " + randomNum.toFixed());


// TASK 7

// var weight = +prompt("Enter your weight in kilograms");
// var output = parseInt(weight);
// if(weight > 0  ){

// document.write("your weight is :" + " " + output + "kgs")

// }


// TASK 8   

// var number = +prompt("Enter a random number between 1 to 10")
// var newNumber = Math.random(number.toFixed(0)) * 10;
// if(number === 7){
// alert("congratulations! the number you entered is matched.")
// }

// else{
//     alert("try agin later!")
// }


// Class Time Task //

// var date = new Date();

// console.log(date);


//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  console.log(nameOfToday);


var dob = new Date("06/03/1998");  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
// console.log(month_diff);  
// //convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
//   console.log(age_dt);
// //extract year from date      
var year = age_dt.getUTCFullYear();  
//   console.log(year);
// //now calculate the age of the user  
var age = Math.abs(year - 1970);  
//   console.log(age);
// //display the calculated age  
document.write("Age of the date entered: " + age + " years");
