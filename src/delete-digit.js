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
    const arr = [];
    const str = n.toString();
    for (let j in str) arr.push(Number(str.replace(str[j], '')));
    return Math.max(...arr);
  }

module.exports = {
    deleteDigit
};
