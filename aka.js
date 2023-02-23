let question = [
  "What is your experience",
  "What would be rather doing",
  "what is your language",
];
let answers = [];
function ask(i) {
  process.stdout.write(`\n\n\n ${question[i]}`);
  process.stdout.write(`>`);
}

process.stdin.on("data", function (data) {
  answers.push(data.toString.trim());
  //check to see if question list large than answer
  if (answers.length < question.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});
