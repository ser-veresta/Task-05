//function the return an object with first and last element of array in form of object
let transformFirstAndLast = (a) => {
    let object = {};
    //storing the first and last element of array in the form of object
    object[a[0]] = a[a.length-1];
    return object;
}
//the given input
let arr = ['GUVI','I','am','geek'];
let obj = transformFirstAndLast(arr);
//printing the output
console.log(obj);
