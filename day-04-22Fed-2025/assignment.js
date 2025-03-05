

function calculate(a ,b, c){
    if (c =="+") {
        return a+b;
    }else if(c =="-"){
        return a-b;
    }else if(c =="*"){
        return a*b;
    }else if(c =="%"){
        return a%b;
    }else if(c =="/"){
        return a/b;
    }else{
        console.log("Invalid operator ");
    }
}
result=calculate(2,3,"%")
console.log(result);
