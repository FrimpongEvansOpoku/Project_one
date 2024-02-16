//Function that calculates a student`s grade based on their score

function studentScore(score) {
  if (score >= 80) {
    console.log("A");
  } else if (score >= 70 && score <= 79.9) {
    console.log("B");
  } else if (score >= 60 && score <= 69.9) {
    console.log("C");
  } else if (score >= 50 && score <= 59.9) {
    console.log("D");
  } else if (score <= 49.9) {
    console.log("E");
  }
}

studentScore(60.9999);
