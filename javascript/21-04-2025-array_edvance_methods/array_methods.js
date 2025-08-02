let arr = ["apple","mango","orange","banana","lichi"]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach((item,idx,arr) => {
    console.log(`item ${item} at ${idx} in this array ${arr}`);
});