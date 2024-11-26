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

let binarMorse = {
    '**********': ' '
};

for (let [key, value] of Object.entries(MORSE_TABLE)) {
    key = key.replaceAll('.', '10').replaceAll('-', '11');
    binarMorse[key] = value;
};


function decode(expr) {
    let letters = expr.match(/.{1,10}/g);
    letters.forEach((e, i) => letters[i] = letters[i].replaceAll('0', ' ').trimLeft().replaceAll(' ', '0'));
    letters.forEach((e, i) => letters[i] = binarMorse[letters[i]]);
    return letters.join('');
}

module.exports = {
    decode
}