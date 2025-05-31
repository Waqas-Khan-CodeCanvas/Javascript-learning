console.log("hello world");
localStorage.setItem("name" , "waqas khan")
localStorage.setItem("age",30)
console.log(localStorage.length);
console.log(window.localStorage);

localStorage.clear();

sessionStorage.setItem("name " , "waqas khan");

console.log(localStorage);

const fullName = "ali";
const age = 20;

const obj = {
    fullName,
    age,
}

console.log(obj);