let textArea = document.createElement('textarea');

document.body.append(textArea);

const funcButtons = {
    27: 'Esc',
    8: 'Backspase',
    9: 'Tab',
    20: 'CapsLock',
    16: 'Shift',
    17: 'Ctrl',
    91: 'Win',
    93: 'Win',
    18: 'Alt',
    32: 'Space',
    13: 'Enter',
    46: 'Del',
    37: '&larr;',
    38: '&uarr;',
    40: '&darr;',
    39: '&rarr;'};

const arrows = {
    37: '←',
    38: '↑',
    40: '↓',
    39: '→'
};

const arrKeyCodeFirst = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61];

const serviceButtons =  [9, 20, 16, 17, 18, 32, 18, 17, 16, 13, 8, 46, 37, 38, 40, 39];

const firstLineLetters = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221];

const secondLineLetters = [65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222];

const thirdLineLetters = [ 90, 88, 67, 86, 66, 78, 77, 188, 190, 191];

const enLower = {
    192: '`',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    48: '0',
    173: '-',
    61: '=',
    81: 'q',
    87: 'w',
    69: 'e',
    82: 'r',
    84: 't',
    89: 'y',
    85: 'u',
    73: 'i',
    79: 'o',
    80: 'p',
    219: '[',
    221: ']',
    65: 'a',
    83: 's',
    68: 'd',
    70: 'f',
    71: 'g',
    72: 'h',
    74: 'j',
    75: 'k',
    76: 'l',
    59: ';',
    222: '\'',
    90: 'z',
    88: 'x',
    67: 'c',
    86: 'v',
    66: 'b',
    78: 'n',
    77: 'm',
    188: ',',
    190: '.',
    191: '/'
};

const enUpper = {
    16: 'Shift',
    192: '~',
    49: '!',
    50: '@',
    51: '#',
    52: '$',
    53: '%',
    54: '^',
    55: '&',
    56: '*',
    57: '(',
    48: ')',
    173: '_',
    61: '+',
    81: 'Q',
    87: 'W',
    69: 'E',
    82: 'R',
    84: 'T',
    89: 'Y',
    85: 'U',
    73: 'I',
    79: 'O',
    80: 'P',
    219: '{',
    221: '}',
    65: 'A',
    83: 'S',
    68: 'D',
    70: 'F',
    71: 'G',
    72: 'H',
    74: 'J',
    75: 'K',
    76: 'L',
    59: ':',
    222: '\"',
    90: 'Z',
    88: 'X',
    67: 'C',
    86: 'V',
    66: 'B',
    78: 'N',
    77: 'M',
    188: '<',
    190: '>',
    191: '?'
};

const ruLower = {
    192: 'ё',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    48: '0',
    173: '-',
    61: '=',
    81: 'й',
    87: 'ц',
    69: 'у',
    82: 'к',
    84: 'е',
    89: 'н',
    85: 'г',
    73: 'ш',
    79: 'щ',
    80: 'з',
    219: 'х',
    221: 'ъ',
    65: 'ф',
    83: 'ы',
    68: 'в',
    70: 'а',
    71: 'п',
    72: 'р',
    74: 'о',
    75: 'л',
    76: 'д',
    59: 'ж',
    222: 'э',
    90: 'я',
    88: 'ч',
    67: 'с',
    86: 'м',
    66: 'и',
    78: 'т',
    77: 'ь',
    188: 'б',
    190: 'ю',
    191: '.'
};

const ruUpper = {
    16: 'Shift',
    192: 'Ё',
    49: '!',
    50: '\\',
    51: '№',
    52: ';',
    53: '%',
    54: ':',
    55: '?',
    56: '*',
    57: '(',
    48: ')',
    173: '_',
    61: '+',
    81: 'Й',
    87: 'Ц',
    69: 'У',
    82: 'К',
    84: 'Е',
    89: 'Н',
    85: 'Г',
    73: 'Ш',
    79: 'Щ',
    80: 'З',
    219: 'Х',
    221: 'Ъ',
    65: 'Ф',
    83: 'Ы',
    68: 'В',
    70: 'А',
    71: 'П',
    72: 'Р',
    74: 'О',
    75: 'Л',
    76: 'Д',
    59: 'Ж',
    222: 'Э',
    90: 'Я',
    88: 'Ч',
    67: 'С',
    86: 'М',
    66: 'И',
    78: 'Т',
    77: 'Ь',
    188: 'Б',
    190: 'Ю',
    191: ','
};

if (!localStorage.getItem('lang')) {
    var lang = 'en';
} else {
    var lang = localStorage.getItem('lang');

}

let printLetters = function (arr, parentDiv, lang) {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];

        var div = document.createElement("div");

        div.className = 'button-'+String(el);
        div.classList.add('letter');

        if (lang == 'ru') {
            div.textContent = ruLower[el];
            } else if (lang == 'en') {
            div.textContent = enLower[el];
            }

        parentDiv.append(div);
    }
};

let printFunckBtn = function (charBtn, parentDiv) {
    var div = document.createElement("div");

        div.className = 'button-'+charBtn;
        div.classList.add('funck-button');
        div.innerHTML = funcButtons[charBtn];

        parentDiv.append(div);

};



var parentDec = document.createElement("div");
    parentDec.classList.add('letters');
    document.body.append(parentDec);
    printLetters(arrKeyCodeFirst, parentDec, lang);
    printFunckBtn(8, parentDec);

var parentFirstLetters = document.createElement("div");
    parentFirstLetters.classList.add('letters');
    document.body.append(parentFirstLetters);
    printFunckBtn(9, parentFirstLetters);
    printLetters(firstLineLetters, parentFirstLetters, lang);
    //printFunckBtn(46, parentFirstLetters); //del btn

var parentSecondLetters = document.createElement("div");
    parentSecondLetters.classList.add('letters');
    document.body.append(parentSecondLetters);
    printFunckBtn(20, parentSecondLetters);
    printLetters(secondLineLetters, parentSecondLetters, lang);
    printFunckBtn(13, parentSecondLetters);

var parentThirdLetters = document.createElement("div");
    parentThirdLetters.classList.add('letters');
    document.body.append(parentThirdLetters);
    printFunckBtn(16, parentThirdLetters);
    printLetters(thirdLineLetters, parentThirdLetters, lang);
    printFunckBtn(16, parentThirdLetters);
    printFunckBtn(38, parentThirdLetters);

var parentSpaceLetters = document.createElement("div");
    parentSpaceLetters.classList.add('letters');
    document.body.append(parentSpaceLetters);
    printFunckBtn(17, parentSpaceLetters);
    printFunckBtn(91, parentSpaceLetters);
    printFunckBtn(18, parentSpaceLetters);
    printFunckBtn(32, parentSpaceLetters);
    printFunckBtn(18, parentSpaceLetters);
    printFunckBtn(93, parentSpaceLetters);
    printFunckBtn(17, parentSpaceLetters);
    printFunckBtn(37, parentSpaceLetters);
    printFunckBtn(40, parentSpaceLetters);
    printFunckBtn(39, parentSpaceLetters);


var parentLang = document.createElement("div");
    parentLang.classList.add('local-lang');
    parentLang.innerHTML = '<span>' + lang + '</span> press (shift and ctrl) to change';
    document.body.append(parentLang);

var osInfo = document.createElement("div");
osInfo.classList.add('local-lang');
osInfo.innerHTML = 'developed in OS Ubuntu Linux';
document.body.append(osInfo);


document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.ctrlKey) {
        if (lang == 'en') {
            lang = 'ru';
        } else if (lang == 'ru') {
            lang = 'en';
        }

        parentLang.innerHTML = '<span>' + lang + '</span> press (shift and ctrl) to change';
        changeLangLetters(lang);
        localStorage.setItem('lang', lang);
    }
});

const divLetter = document.querySelectorAll('.letter');

let changeLangLetters = function(lang) {

    divLetter.forEach(el => {
        let elClassName = el.className;
        let elCode = parseInt(elClassName.match(/\d+/));

        if (lang == 'ru') {
            el.textContent = ruLower[elCode];
        } else if (lang == 'en') {
            el.textContent = enLower[elCode];
        }
    });
};

let changeCaseLetters = function(whatCase) {

    divLetter.forEach(el => {
        let elClassName = el.className;
        let elCode = parseInt(elClassName.match(/\d+/));
        if (whatCase === 'Upper') {
            if (lang == 'ru') {
                el.textContent = ruUpper[elCode];
            } else if (lang == 'en') {
                el.textContent = enUpper[elCode];
            }
        } else if (whatCase === 'Lower') {
            if (lang == 'ru') {
                el.textContent = ruLower[elCode];
            } else if (lang == 'en') {
                el.textContent = enLower[elCode];
            }
        }

    });
};

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    let current = document.querySelector('.button-'+String(event.keyCode)+'');
    if (String(event.keyCode) != 20) {
        current.classList.add('active');
    } else {
        current.classList.toggle('active');
        if (current.classList.contains('active') == false) {
            divLetter.forEach(el => {
                el.textContent = el.textContent.toLowerCase();
            });

        } else {
            divLetter.forEach(el => {
                el.textContent = el.textContent.toUpperCase();
            });
        }
    }

    if (serviceButtons.indexOf(event.keyCode) == -1) {

        textArea.value += current.textContent;
    }
    if (event.keyCode == 13) {
        textArea.value += '\n';
    }
    if (event.keyCode == 32) {
        textArea.value += '\ ';
    }
    if (event.keyCode == 9) {
        textArea.value += '\t';
    }
    if (event.keyCode == 8) {
        textArea.value = textArea.value.slice(0, -1);
    }
    if (event.keyCode == 16) {
        changeCaseLetters('Upper');
    }
    if (event.keyCode >= 37 && event.keyCode <=40) {
        textArea.value += arrows[event.keyCode];

    }
});

document.addEventListener('keyup', function(event) {
    event.preventDefault();
    let current = document.querySelector('.button-'+String(event.keyCode)+'');
      if (event.keyCode != 20) {
          current.classList.remove('active');
      }

      if (event.shiftKey) {
          changeCaseLetters('Lower');
      }
});


divLetter.forEach(el => {
    el.addEventListener('mousedown', function (evt) {
        evt.target.classList.toggle('active');
        textArea.value += el.textContent;
    });
    el.addEventListener('mouseup', function (evt) {
        evt.target.classList.toggle('active');

    });
});

const divFunck = document.querySelectorAll('.funck-button');
    divFunck.forEach(el => {

    let elCode = parseInt(el.className.match(/\d+/));

    el.addEventListener('mousedown', function (evt) {
        if (elCode != 20) {
            evt.target.classList.add('active');
        }
        if (elCode == 13) {
            textArea.value += '\n';
        }
        if (elCode == 32) {
            textArea.value += '\ ';
        }
        if (elCode == 16) {
            changeCaseLetters('Upper');
        }
        if (elCode == 9) {
            textArea.value += '\t';
        }
        if (elCode == 8) {
            textArea.value = textArea.value.slice(0, -1);
        }

        if (elCode == 20) {
            el.classList.toggle('active');
            if (el.classList.contains('active') == false) {
                changeCaseLetters('Lower');
            } else {
                changeCaseLetters('Upper');
            }
        }
        if (elCode >= 37 && elCode <=40) {
            textArea.value += arrows[elCode];

        }

    });

    el.addEventListener('mouseup', function (evt) {
        if (elCode != 20) {
            evt.target.classList.remove('active');
        }

        if (elCode == 16) {
            changeCaseLetters('Lower');
        }

    });
});
