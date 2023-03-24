const number = 5;
const start = 10;
const end = 25;
const isNotInRange = number <= start && number >= end;
const isInRange = !isNotInRange;
console.log(isInRange);