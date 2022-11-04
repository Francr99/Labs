let submissions = [{name: "jane", score: 95, date: "2020-01-24", passed: true}]
                  [{name: "joe", score: 77, date: "2018-05-14", passed: true}]
                  [{name: "jack", score: 59, date: "2019-07-05", passed: false}]
                  [{name: "jill", score: 88, date: "2020-04-22", passed: true}]

function addSubmission(arrey, newName, newScore, newDAte) {
//If score greater or equal to 60 then passed or failed    
//i need to have an object with name, store, date
//push to my submissions arrey
}

function addSubmission(array, newName, newScore, newDate){
    let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate
}

newSubmission.score >= 60 ? newSubmission.passed = true : newSubmission.passed = false;

Array.push(newSubmission);
console.log(array);
}

addSubmission(submission, "Sally", 48, 2020 - 01 - 01);

function deleteSubmissionByIndex(array, index) {
    submissions.splice(1, 1);
    console.log(deleteBySubmissionsIndex);
}

deleteSubmissionByIndex(submissions, 1);

function deleteSubmissionByIndex(array, name){
findIndex((name, 1, submissions) => {})
}
