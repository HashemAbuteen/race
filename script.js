function assignTime(racers) {
  let speed = [];
  const min = 50;
  const max = 100;
  const firstRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const secondMin = firstRandomNumber + 1;
  const secondMax = max;
  const secondRandomNumber =
    Math.floor(Math.random() * (secondMax - secondMin + 1)) + secondMin;

  const thirdMin = secondRandomNumber + 1;
  const thirdRandomNumber =
    Math.floor(Math.random() * (max - thirdMin + 1)) + thirdMin;
  speed.push({ name: racers[0], time: firstRandomNumber });
  speed.push({ name: racers[1], time: secondRandomNumber });
  speed.push({ name: racers[2], time: thirdRandomNumber });
  return speed;
}
