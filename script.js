const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCOPY = dogsJulia.slice();

  dogsJuliaCOPY.splice(0, 1);

  dogsJuliaCOPY.splice(-2);

  const allDogs = [...dogsJuliaCOPY, ...dogsKate];

  allDogs.forEach((age, index) => {
    const dogType = age >= 3 ? "adult" : "puppy";
    console.log(
      `dog numbe${index + 1}is an ${dogType} and is ${age} years old `
    );
  });
};
const dogsJulia1 = [3, 5, 2, 12, 17];
const dogsKate1 = [9, 16, 6, 8, 3];
checkDogs(dogsJulia1, dogsKate1);

console.log("second test data of dogs");
const dogsJulia2 = [4, 1, 15, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);

console.log("second challenge");

function calcAverageHumanAge(ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter((age) => age >= 18);

  const sum = adults.reduce((acc, cur) => acc + cur, 0);
  const average = sum / adults.length;

  return average;
}
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log("Average human age for data 1:", calcAverageHumanAge(data1));
console.log("Average human age for data 2:", calcAverageHumanAge(data2));
