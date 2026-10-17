const scores = [85, 72, 91, 64, 78];

console.log("Student Scores:");
for (let score of scores) {
    console.log(score);
}
console.log("");

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passedCount = 0;
let failedCount = 0;

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    total += score;

    if (score > highest) highest = score;
    if (score < lowest) lowest = score;

    let status = "";
    let interpretation = "";

    if (score >= 90) {
        interpretation = "Excellent";
        status = "Passed";
        passedCount++;
    } else if (score >= 80) {
        interpretation = "Very Good";
        status = "Passed";
        passedCount++;
    } else if (score >= 75) {
        interpretation = "Good";
        status = "Passed";
        passedCount++;
    } else {
        status = "Failed";
        failedCount++;
    }

    if (status === "Failed") {
        console.log(`Student ${i + 1}: ${score} - ${status}`);
    } else {
        console.log(`Student ${i + 1}: ${score} - ${interpretation} - ${status}`);
    }
}

let average = total / scores.length;

console.log("");
console.log(`Total Score: ${total}`);
console.log(`Average Score: ${average}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);