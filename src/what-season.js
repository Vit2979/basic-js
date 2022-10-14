const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (date instanceof Date !== true || Object.entries(date).length > 0) throw new Error('Invalid date!');
    const num = date.getMonth();
    switch (true) {
      case num === 11 || num < 2:
        return 'winter';
      case num > 1 && num < 5:
        return 'spring';
      case num > 4 && num < 8:
        return 'summer';
      case num > 7 && num < 11:
        return 'autumn';
    }
  }

module.exports = {
    getSeason
};
