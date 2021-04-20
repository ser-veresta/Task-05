//fcuntion to conovert a given array to JSON object
let transformGeekData = (a) => {
    let data = [];
    //converting the given array by using a nested foreach function
    a.forEach((item) => {
        let obj = {};
        item.forEach((item) => obj[item[0]] = item[1]);
        data.push(obj);
    });
    return data;
}
//the given input
let arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
let data = transformGeekData(arr);
//printing the output
console.log(data);
