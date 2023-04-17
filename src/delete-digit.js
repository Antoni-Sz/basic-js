const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString();
  let max = -Infinity;

  for (let i = 0; i < nStr.length; i++) {
    const numArr = nStr.split('');
    numArr.splice(i, 1);
    const num = Number(numArr.join(''));
    max = Math.max(max, num);
  }

  return max;
}

module.exports = {
  deleteDigit
};
