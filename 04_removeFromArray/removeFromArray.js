const removeFromArray = function (arrName, ...rest) {
  let newArr = [];
  for (let i = 0; i < arrName.length; i++) {
    let count = 0;
    for (let k = 0; k < rest.length; k++) {
      if (arrName[i] === rest[k]) {
        // let index = arrName.indexOf(rest[i]);
        //arrName.splice(index, 1);
        count = count + 1;
      }
    }
    if (count === 0) {
      newArr.push(arrName[i]);
    }
  }
  return newArr;
};
// Do not edit below this line
module.exports = removeFromArray;
