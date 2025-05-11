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

const fruits  = ["apple","banana","cherry","peach"];
const [firstFruit,secondFruit, ...restFruits] = fruits

console.log(firstFruit);
console.log(secondFruit);
console.log(restFruits);