const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const arr = [];
    let tempArr = [];
    let str = '';
    for (let i in domains) {
      tempArr.push(domains[i].split('.'));
      for (let j = tempArr[0].length - 1; j >= 0; j--) {
        str += '.' + tempArr[0][j];
        arr.push(str);
      }
      str = '';
      tempArr = [];
    }
    let output = {};
    for (let k in arr)(output[arr[k]]) ? output[arr[k]]++ : output[arr[k]] = 1;
    return output;
  }

module.exports = {
    getDNSStats
};
