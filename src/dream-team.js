const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let output = [];
    for (let i in members) {
      if (typeof members[i] !== 'string') continue;
      output.push(members[i].trim()[0].toUpperCase());
    }
    return output.sort().join('');
  }

module.exports = {
    createDreamTeam
};
