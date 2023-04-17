const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const s1Chars = s1.split('');
  const s2Chars = s2.split('');
  const s1CharCounts = {};

  for (let i = 0; i < s1Chars.length; i++) {
    s1CharCounts[s1Chars[i]] = (s1CharCounts[s1Chars[i]] || 0) + 1;
  }

  for (let i = 0; i < s2Chars.length; i++) {
    if (s1CharCounts[s2Chars[i]] && s1CharCounts[s2Chars[i]] > 0) {
      count++;
      s1CharCounts[s2Chars[i]]--;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
