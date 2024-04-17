const sumAll = function (min, max) {
  let sum = 0;
  let MIN;
  let MAX;
  if (min < 0 || max < 0) {
    return "ERROR";
  } else if (typeof min !== "number" || typeof max !== "number") {
    return "ERROR";
  } else if (min < max) {
    MIN = min;
    MAX = max;
  } else if (min > max) {
    MIN = max;
    MAX = min;
  } else {
    return "ERROR";
  }

  for (i = MIN; i <= MAX; i++) {
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
