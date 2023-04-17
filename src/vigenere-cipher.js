const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(reverse = true) {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    this.reverse = reverse;
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }

    const textArr = text.toLowerCase().split("");
    const keyArr = key.toLowerCase().split("");
    let keyNum = 0;

    const cipheredArr = textArr.map(char => {
      if (!/[a-z]/i.test(char)) {
        return char;
      }

      const charIndex = this.alphabet.indexOf(char);
      const keyIndex = this.alphabet.indexOf(keyArr[keyNum % keyArr.length]);
      const cipheredIndex = (charIndex + keyIndex) % this.alphabet.length;
      const cipheredChar = this.alphabet[cipheredIndex].toUpperCase();

      keyNum++;
      return cipheredChar;
    });

    if (this.reverse) {
      return cipheredArr.join("");
    } else {
      return cipheredArr.reverse().join("");
    }
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }

    const textArr = text.toLowerCase().split("");
    const keyArr = key.toLowerCase().split("");
    let keyNum = 0;

    const decipheredArr = textArr.map(char => {
      if (!/[a-z]/i.test(char)) {
        return char;
      }

      const charIndex = this.alphabet.indexOf(char);
      const keyIndex = this.alphabet.indexOf(keyArr[keyNum % keyArr.length]);
      let decipheredIndex = (charIndex - keyIndex) % this.alphabet.length;

      if (decipheredIndex < 0) {
        decipheredIndex += this.alphabet.length;
      }

      const decipheredChar = this.alphabet[decipheredIndex].toUpperCase();

      keyNum++;
      return decipheredChar;
    });

    if (this.reverse) {
      return decipheredArr.join("");
    } else {
      return decipheredArr.reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
