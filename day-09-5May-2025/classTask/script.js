// const btn  = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     // console.log("hello world");
//     // btn.classList.toggle("blue")
//     if(btn.hasAttribute("class")){
//         btn.removeAttribute("class")
//     }else{
//         btn.setAttribute("class" , "red")
//     }

// })



const btn = document.getElementById("btn");
const container = document.getElementsByClassName("container");

btn.addEventListener("click",()=>{
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class","text-green");
    const textNode = document.createTextNode("hello world!")
    paragraph.appendChild(textNode);
    container.appendChild(paragraph)
    console.log(paragraph);
})