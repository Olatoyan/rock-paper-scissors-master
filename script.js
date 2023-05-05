"use strict";

const numArray = function (num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(numArray(15));

const numArray2 = (num) => Array.from({ length: num }, (_, i) => i + 1);
console.log(numArray2(15));
