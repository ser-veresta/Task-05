//function to return minor students
let returnMinors = (a) => {
    //storing the object with age less than 20 in minors
    let minors = a.filter(item => item.age < 20);
    //returning minors to print
    return minors;
}
//input students
var students = [
    {name: 'Siddharth Abhimanyu', age: 21},
    { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},
    {name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},
    {name: 'AAK chandran',age: 23},
    {name:'Gabbar Singh',age: 33},
    {name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},
    {name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},
    {name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56}
];

//printting the output
console.log(returnMinors(students));
