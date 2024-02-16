const height = 3.1;
const weight = 90.6;
const BMI = weight / height;
if (BMI <= 18.5) {
  console.log("You are underweight.");
} else if (BMI <= 24.9) {
  console.log("Your weight is normal.");
} else if (BMI <= 29.29) {
  console.log("Warning, you are overweight.");
} else {
  console.log("You are obese");
}
