const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * --discard-next (excludes the next element of the array from the transformed array)
 * --discard-prev (excludes the previous element of the array from the transformed array)
 * --double-next (duplicates the next element of the array in the transformed array)
 * --double-prev (duplicates the previous element of the array in the transformed array.)
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function  transform(arr) {
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    const a = arr;
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      switch (true) {
        case a[i] === '--discard-next':
          a[i + 1] = undefined;
          break;
        case a[i] === '--discard-prev' && a[i - 1] !== undefined:
          newArr.splice(i - 1, 1);
          break;
        case a[i] === '--double-next' && i !== arr.length - 1:
          newArr.push(arr[i + 1]);
          break;
        case a[i] === '--double-prev' && a[i - 1] !== undefined:
          newArr.push(a[i - 1]);
          break;
        case a[i] === '--double-prev' && a[i - 1] === undefined || a[i] === undefined || a[i] === '--double-next' && i === arr.length - 1 || a[i] === '--discard-prev' && a[i - 1] === undefined:
          break;
        default:
          newArr.push(a[i]);
      }
    }
    return newArr;
  }

module.exports = {
    transform
};
