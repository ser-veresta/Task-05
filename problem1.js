//function to print the values of given object
var printAllValues = (a) => {
    let arr = [];
    //using for in loop to get the values of object
    for(let item in a){
        arr.push(a[item]);
    }
    //printing the output
    console.log(arr);
}
//the given input
var object = {name: 'RajiniKanth', age: 33, hasPets : false};
printAllValues(object);
