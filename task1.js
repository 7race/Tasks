const heightHill = 100;
const distanceDay = 50;
const distanceNight = -30;
const sumDistance = distanceDay + distanceNight;

let distanceTraveled = 0;
let sumDays = 0;

while (distanceTraveled < 100) {
  distanceTraveled += sumDistance;
  sumDays++;
}

console.log(sumDays);

// answer: 5
