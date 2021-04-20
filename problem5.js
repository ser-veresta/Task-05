//function to return the given array in the form of object
let fromListToObject = (a) => {
    let object = {};
    //converting the given array into object using foreach function
    a.forEach(item => object[item[0]] = item[1]);
    return object;
}
//the given input
let arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
let obj = fromListToObject(arr);
//printing the output
console.log(obj);
