console.log("Hello world");
const list = document.querySelector("ul")
console.log(list);
const li = document.createElement("li");

li.innerText="apple";
list.append(li);


console.log(list.getAttribute("id"));
list.setAttribute("class","navLinks");
list.style.color="blue";

list.classList.add("class1","class2","class3")
list.classList.toggle("class10","class1");