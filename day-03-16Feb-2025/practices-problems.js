// var universityName = prompt("Enter your university name : ");
// // how to hand the factorial of the String
// console.log("object");
// universityName.toLowerCase()
// console.log(universityName.toLowerCase().trim());

// if (universityName.toLowerCase() !== "agriculture") {  
//     console.log("You are allowed to take addimssion in SMIT ");
// }else{
//     console.log("You are not allowed to take addimssion in SMIT ");
// }



// write a programe that take marks of the subjects from the use and and print the total ,percentage, and grade 
var userName=prompt("Enter your name here : ");
var userRollno=prompt("Enter your RollNo here : ");

var htmlMark = +prompt("Enter your HTML marks : ");
var cssMark = +prompt("Enter your CSS marks : ");
var javascriptMark = +prompt("Enter your Javascript marks : ");
var laravelMark = +prompt("Enter your Laravel Science marks : ");
var mysqlMark = +prompt("Enter your MySQL marks : ");

var totalMarks=550;
var obianedMarks=htmlMark +cssMark +mysqlMark +laravelMark +mysqlMark ;
var percengatge=(obianedMarks/totalMarks)*100;

console.log("Total Marks = ",totalMarks);
console.log("Obtained Marks = ",obianedMarks);
console.log("Your percentage is = ",percengatge);

if (percengatge >= 90) {
    console.log("Grade = A");
}else if(percengatge >=80){
    console.log("Grade = B");
}else if(percengatge >=70){
    console.log("Grade = C");
}else if(percengatge >=60){
    console.log("Grade = D");
}else if(percengatge >=50){
    console.log("Grade = E");
}else{
    console.log("Grade = F");
}

