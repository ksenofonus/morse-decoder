const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let morse = [];
  let result = [];
  for (let i = 0; i < expr.length / 10; i++) {
    arr.push(expr.substring(i * 10, i * 10 + 10));
  }
  arr.forEach((item) => {
    let str = '';
    if (item[0] === '*') {
        str = ' ';
    }
    for (let i = 0; i < item.length; i = i + 2) {
        if (item[i] === '1') {
           if (item[i+1] === '0') {
               str = str + '.'
           } else { 
               str = str + '-'
           }
        }
    }
    morse.push(str);
    str='';
  })
  morse.forEach((item) => {
    if (item === ' ') {
        result.push(' ');
    }
    for (key in MORSE_TABLE) {
      if (item === key) {
        result.push(MORSE_TABLE[key]);
      }
    }
  })
  return result.join('')// write your solution here
}

module.exports = {
    decode
}