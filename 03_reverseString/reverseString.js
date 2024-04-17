const reverseString = function (myString) {
  let stringArray = [...myString];
  stringArray = stringArray.reverse();
  let newString = stringArray.join("");
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
