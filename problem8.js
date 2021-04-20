//function to check the question and answer
let  chksecurityQuestions = (securityQuestions,q,a) => {
    let status;
    //using foreach function to check for the given question and it answer
    securityQuestions.forEach((item) => {
        if(item.question === q){
            status = item.expectedAnswer === a;
        }
    });
    return status;
}
//input security questions
let securityQuestions = [
 {
 question: 'What was your first pet’s name?',
 expectedAnswer: 'FlufferNutter'
 },
 {
 question: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 question: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
]

let ques = 'What was your first pet’s name?';
let ans  =  'FlufferNutter';
let status = chksecurityQuestions(securityQuestions, ques, ans);
//printing the status
console.log(status);
