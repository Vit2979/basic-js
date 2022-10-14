const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
    let output = '';
    let num = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) num++;
      else {
        (num === 1) ? output += str[i]: output += num + str[i];
        num = 1;
      }
    }
    return output;
  }

module.exports = {
    encodeLine
};
