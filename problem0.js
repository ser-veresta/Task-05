///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PART-1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 },
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}

//adding weight and height to fluffy
cat.weight = 6;
cat.height = 60;

//changing fluffy name to fluffyy
cat.name = 'Fluffyy';

//listing all the activities of fluffy cat friends
cat.catFriends.forEach(item => console.log(item.activities));

//printing the cat friends names
cat.catFriends.forEach(item => console.log(item.name));

//printing the total weight of cat friends
let totalWeight = cat.catFriends.reduce((sum,a)=>sum+a.weight,0);
console.log(totalWeight);

//printing the total activities of all cats
let totalActivities = [...cat.activities,...cat.catFriends.reduce((acc,a)=>[...acc,...(a.activities)],[])];
console.log(totalActivities);

//adding activities to bar and foo
cat.catFriends[0].activities.push('sleep','pre-sleep naps');
cat.catFriends[1].activities.push('be grumpy','eat bread omblet');

//updating the furcolor of bar
cat.catFriends[0].furcolor = 'brown';

console.log(cat);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PART-2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}

//changing atFaultForAccident to false
myCar.accidents.forEach(item => item.atFaultForAccident = false);

//printing the dates of accidents
myCar.accidents.forEach(item => console.log(item.date));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
