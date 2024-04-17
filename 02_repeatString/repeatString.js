const repeatString = function (myString, myNum) {
  if (myNum < 0) {
    return "ERROR";
  }
  let theString = "";
  for (let i = 1; i <= myNum; i++) {
    theString = theString.concat(myString);
  }
  return theString;
};

// Do not edit below this line
module.exports = repeatString;
