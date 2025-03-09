// var fruits=["apple","banana","kabob"]

// console.log("fruits : ",fruits);
// // console.log(fruits[4]); // undefine
// console.log(fruits[2]="orange"); // reassign value
// console.log(fruits[3]="pinApple"); // add element
// console.log(fruits[10]="tomato"); // add element
// console.log(fruits[8]); // add element
// console.log(fruits);

// arrays methods
// push ,pop ,shift, unshift, slice, splice, indexof 
// fruits.push("orange")
// fruits.push("orange","pineapple")
// fruits.pop() return removed element
// fruits.shift() // this also return element that is removed
// fruits.unshift("hello") //add element at first index return lenght of the array
// fruits.unshift("hello","welcome") //add element at first index can add more than one elements
// console.log(fruits.slice(2,4));
// console.log(fruits.splice(2,4));  //this will delete the element and we can  add some more element also
// console.log("fruits : ",fruits);


var cities = ["peshawar", "mardan","swabi","char sadda","swat","noswshera","kohat","mansehra","abbotabad"];

// console.log(cities.slice(3,5));
// console.log(cities.slice(3));
// console.log(cities.slice());
// console.log(cities.slice(3,-1)); negative indexing also possible in slice and splice

// splice in javascript
// cities.splice(2, 0, "karak")
// cities.splice(2, 2, "malakand")
// cities.splice(2, 4) // also return removed values change value in the original array

// console.log(cities.indexOf("noswshera"));
// console.log(cities.lastIndexOf("noswshera"));
// console.log(cities.lastIndexOf("karak")); // if value not found then it return -1 as output

//what is the difference between method and properties

// var anotherCities = ["karak","batagram","batkhela","naran"]

// var newCities= cities.concat(anotherCities)
// console.log(newCities);

// var anotherCities=cities
// anotherCities[0]="rustam"
// console.log(cities);


// function changeArray(arr){
//     arr[0]="parachinar";
// }
// changeArray(anotherCities)

// console.log(cities);
// console.log(anotherCities);



