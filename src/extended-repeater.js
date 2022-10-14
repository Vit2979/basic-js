const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str = String(str);
    let output = '';
    let separator;
    (options.separator) ? separator = options.separator: separator = "+";
    if (options.addition !== undefined) {
      if (String(options.addition)) {
        let addition = String(options.addition);
        let additionSeparator;
        (options.additionSeparator) ? additionSeparator = options.additionSeparator: additionSeparator = '|';
        if (options.additionRepeatTimes) {
          for (let j = 1; j < options.additionRepeatTimes; j++) {
            (j < options.additionRepeatTimes) ? addition += additionSeparator + String(options.addition): addition += String(options.addition);
          }
        }
        str += addition;
      }
    }
    if (options.repeatTimes) {
      for (let i = 0; i < options.repeatTimes; i++) {
        (i === options.repeatTimes - 1) ? output += str: output += str + separator;
      }
    } else output = str;
    return output;
  }

module.exports = {
    repeater
};
