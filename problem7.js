//function to check if the given two objects are equal
let assertObjectsEqual = (actual,expected,testName) => {
    //using JSON stringify to compare the objects and returing the output
    if(JSON.stringify(actual) === JSON.stringify(expected)){
        return 'Passed';
    }
    else{
        return `FAILED ${testName} Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`;
    }
}
//the given objects to compare(input)
let expected = {foo: 5, bar: 6};
let actual = {foo: 5, bar: 6};
//printing the output
console.log(assertObjectsEqual(actual,expected,'detects that two objects are equal'));
