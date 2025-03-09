console.log("hello world");
const message="Today is 7th Ramadan";
console.log(message.slice(0,3));

let text="it is startling to think that even in the darkest depths of World War II , j.R.R writing the trilogy , which contains , with the weird applicability available myth the essential nation that the good gray wizard can understand the even because he is just enough like them to grasp their minds and mottives in way grasp his."

for (let i = 0; i < text.length; i++) {
    if (text.slice(i,i+12)==="World War II") {
        text=text.slice(0,i)+"the Second World War"+text.slice(i+12);
    }
    
}
console.log(text);

// let originalString = "The color of the sky changes throughout the day.";

// let newString = originalString.replace("color", "colour");

// console.log(newString);

let originalString = "The color of the sky changes throughout the day, and sometimes the color of the clouds creates a beautiful contrast. The color of a flower can indicate its species, and the color of clothing can affect someone's mood.";

let newString = originalString.replaceAll("color", "colour");

console.log(newString);