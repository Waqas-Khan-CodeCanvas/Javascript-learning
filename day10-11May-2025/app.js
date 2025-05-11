// // // rest and spread operators
// // const fruits  = ["apple","banana"];
// // const newFruitsArray = [...fruits]
// // const vegetables = ["carrot ","lemon"];
// // const foods = [...fruits , ...vegetables]

// // foods[0]="water melon";
// // console.log(foods);
// // console.log(fruits);
// // console.log(vegetables);


// // objects
// const person  = {
//     fullName : "waqas khan",
//     age : 20,
// }
// console.log(person);
// const newPerson = {
//     ...person,
//     fullName: "ali khan",
// }
// console.log(newPerson);

// const fruits  = ["apple","banana","cherry","peach"];
// const [firstFruit,secondFruit, ...restFruits] = fruits

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(restFruits);

// const person  = {
//     fullName : "waqas khan",
//     age : 20,
//     phoneNumber:"+92567890",
//     email : "waqas@gmail.com",
// }

// const {age, ...restPerson} = person
// console.log("age = ",age);
// console.log("restPerson = ",restPerson);



// rest parameters 

// const add = (a,b,c,d) => console.log(a+b+c+d);
// add(2,2,2,2)
// const add = (...args) => {
//     let sum = 0 
//     args.forEach(item => {
//         sum += item
//     });
//     console.log(sum);
// };
// add(2,2,2,2)


// -> ternary operator (it's a shorhand if else)
// const isIndian = true ; 
// const result = isIndian ? "aiye  chai pi ke jaiye": "ishting...";
// console.log(result);


function greet(message){
    alert(` hey ${message}` )
}