/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
    constructor(directMachine) {
        (directMachine !== false) ? this.direct = true: this.direct = false;
        this.latinAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      encrypt(message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');
        message = message.toUpperCase();
        key = key.toUpperCase();
        let keyIndex;
        let found = 0;
        let shift = 0;
        let newIndex = 0;
        const arr = [];
        for (let j in message) {
          for (let i in this.latinAlphabet) {
            if (message[j] === this.latinAlphabet[i]) {
              arr.push(Number(i));
              found = 1;
              break;
            }
          }
          (found === 0) ? arr.push(message[j]): found = 0;
          keyIndex = j % key.length;
          if (typeof arr[j] === 'number') {
            for (let k in this.latinAlphabet) {
              newIndex = keyIndex - shift;
              while (newIndex < 0) newIndex = key.length + newIndex;
              if (key[newIndex] === this.latinAlphabet[k]) {
                arr[j] += Number(k);
                if (arr[j] > 25) arr[j] -= 26;
                arr[j] = this.latinAlphabet[arr[j]];
                break;
              }
            }
          } else shift++;
        }
        return (this.direct) ? arr.join('') : arr.reverse().join('');
      }
      decrypt(message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');
        message = message.toUpperCase();
        key = key.toUpperCase();
        let keyIndex;
        let found = 0;
        let shift = 0;
        let newIndex = 0;
        const arr = [];
        for (let j in message) {
          for (let i in this.latinAlphabet) {
            if (message[j] === this.latinAlphabet[i]) {
              arr.push(Number(i));
              found = 1;
              break;
            }
          }
          (found === 0) ? arr.push(message[j]): found = 0;
          keyIndex = j % key.length;
          if (typeof arr[j] === 'number') {
            for (let k in this.latinAlphabet) {
              newIndex = keyIndex - shift;
              while (newIndex < 0) newIndex = key.length + newIndex;
              if (key[newIndex] === this.latinAlphabet[k]) {
                arr[j] -= Number(k);
                if (arr[j] < 0) arr[j] += 26;
                arr[j] = this.latinAlphabet[arr[j]];
                break;
              }
            }
          } else shift++;
        }
        return (this.direct) ? arr.join('') : arr.reverse().join('');
      }
    }

module.exports = {
    VigenereCipheringMachine
};
