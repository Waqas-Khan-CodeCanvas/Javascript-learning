// // const numbers = [1,2,3,4,];
// // const [firstvalue,secondvalue,,fourhtvalue=5]= numbers
// // // console.log(firstvalue);
// // // console.log(secondvalue);
// // console.log(fourhtvalue);

// // const numbers = [1,2,3,4,["a","b"]];
// // const [firstvalue,secondvalue,,, [aValue,bValue]=[]]= numbers
// // console.log(aValue);
// // console.log(bValue);


// // function emp(name= "emp", age = 20){
// //     console.log("name = ",name);
// //     console.log("age = ",age);
// // }
// // emp("ali",30)

// // const obj = {name:"ali",age:20  , address: {city:"mardan",state:"kpk"}}
// // const obj = {name:"ali",age:20  , address: {city:"mardan",state:null}}
// const obj = {name:"ali",age:20  , address: {city:"mardan",state:undefined}}
// // const obj = {name:"ali",age:null  }

// // const {name ,age:newAge = 30, address:{city="peshawar" , state}={}} = obj
// const {name ,age:newAge = 30, address:{city , state}={}} = obj
// console.log(name );
// console.log(newAge);
// console.log(city);
// console.log(state);



// const greet = ([a,b,c ] = []) => console.log(a, b ,c);
// greet([1,2,3])
// const greet = (...arr) => {
    //     const [a,b,c] =arr;
    //     console.log(a); 
    // }
    // greet([1,2,3])
    
const greet = ({fullName,age,address:{city, state}}= {}) => console.log(fullName,age,city,state);
greet({fullName : "Waqas khan", age:22,address :{city :"mardan",state :"kpk"}})