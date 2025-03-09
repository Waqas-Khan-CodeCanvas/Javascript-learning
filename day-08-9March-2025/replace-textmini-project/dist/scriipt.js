let text=document.getElementById('text');
let getWord=document.getElementById("word")
// getWord.addEventListener('', function() {
//     let text = this.value;
//     getText=text
//     console.log(text);
// });


// text.addEventListener('input', function() {
//     let text = this.value;
//     getText=text
//     console.log(text);

// });
function replaceText(){
    console.log("text");
    text=document.getElementById("text").value
    word=document.getElementById("word").value
    console.log(text);
    console.log(word);
    text=document.getElementById("text").value="" 
    for (let i  = 0; i  < text.length; i ++) {
        if (text.slice(i,i+(word.length))===word) {
            text=text.slice(0,i)+word+text.slice(i+word.length);
        }
        
    }
    // document.getElementById('text').value=text
    console.log("change");

    
    
}




// console.log("get",getText);

let arr=[1,2,3,4,5]
let nextarr=arr.
nextarr[0]=9
console.log(arr);