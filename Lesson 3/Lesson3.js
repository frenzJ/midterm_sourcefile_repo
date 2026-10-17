'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push('Faith');
studentScores.push(88);
studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();
studentNames.pop();
studentScores.pop();

const danielIndex = studentNames.indexOf('Daniel');
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);

console.log('\nPART D: CLASS STATISTICS');

let totalScore = 0;
for (let i = 0; i < studentScores.length; i++) {
  totalScore += studentScores[i];
}
const averageScore = totalScore / studentScores.length;

let highestScore = studentScores[0];
for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) highestScore = studentScores[i];
}

let lowestScore = studentScores[0];
for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] < lowestScore) lowestScore = studentScores[i];
}

console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

console.log('\nPART E: PASSING-SCORE ANALYSIS');

const PASSING_SCORE = 75;

const passingScores = studentScores.filter(score => score >= PASSING_SCORE);
const statuses = studentScores.map(score => score >= PASSING_SCORE ? 'Passed' : 'Failed');
const atLeastOneFailed = studentScores.some(score => score < PASSING_SCORE);
const allStudentsPassed = studentScores.every(score => score >= PASSING_SCORE);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

console.log('\nPART F: SORT AND SEARCH');

const sortedScores = Array.from(studentScores);
sortedScores.sort((a, b) => b - a);

console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', sortedScores.includes(91));
console.log('Index of 91:', sortedScores.indexOf(91));

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {
  let rowTotal = 0;
  for (let j = 0; j < activityScores[i].length; j++) {
    rowTotal += activityScores[i][j];
  }
  const rowAverage = rowTotal / activityScores[i].length;
  activityAverages.push(rowAverage);
  console.log(`${originalNames[i]}'s activity average: ${rowAverage.toFixed(2)}`);
}

console.log('Activity Averages:', activityAverages);

console.log('\nPART H: TEXT SUMMARY');

console.log('Students:', studentNames.join(' | '));