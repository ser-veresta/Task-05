//function to print the keys of the given object
var printAllKeys = (a) => {
    let arr = [];
    //using for in loop to get the keys of the given object
    for(let item in a){
        arr.push(item);
    }
    //printing the output
    console.log(arr);
}
//the given input
var object = {name: 'RajiniKanth', age: 33, hasPets : false};
printAllKeys(object);
