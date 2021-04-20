//function to print the given object in form of array
var convertListToObject = (a) => {
    let arr = [];
    //using the for in loop to store the key value pair as array
    for(let item in a){
        arr.push([item,a[item]]);
    }
    //printing the output 
    console.log(arr);
}
//the given input
var object = {name: 'ISRO', age: 35, role: 'Scientist'};
convertListToObject(object);
