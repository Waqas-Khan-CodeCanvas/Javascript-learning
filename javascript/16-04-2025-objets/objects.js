console.log("hello world");

const carInfo = {
    name:{car:"civic"},
    model:2025
};
console.log(carInfo.name.car);
console.table(carInfo)

const studentsInfo = {
    zaryab : {name:"zaryab", rollNo:2002202,city:"peshawar",dept:"CS"},
    zawar : {name:"zawar", rollNo:2002202,city:"mardan",dept:"CS"},
    ali : {name:"ali", rollNo:2002202,city:"swabi",dept:"CS"},
    khan : {name:"khan", rollNo:2002202,city:"charsadah",dept:"CS"},
    waqas : {name:"waqas", rollNo:2002202,city:"mardan",dept:"CS"}
}
console.table(studentsInfo);

const companyInfo = {
    name:"ABC",
    founded:1998,
    isRunning:true,
    branches: ["us","pak","india"],
    address:{
        plot:789,
        street:"xyz",
        city:"LA",
        country:"us",
    },
}
console.table(companyInfo)
console.log(companyInfo);

const myInfo = {
    name:"zaryab",
    age : 20,
    gender: "male",
    maritalStatus: false,
}
console.table(myInfo)
myInfo['maritalStatus']=true;
myInfo.alive = true ;
console.table(myInfo)

for(let key in myInfo){
    console.log(`${key} => ${myInfo[key]}`);
}

