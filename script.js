let textArea = document.createElement('textarea');

document.body.append(textArea);

// let buttons = {192: {['~', '`', 'Ё', 'ё'] },
// 48: '0',
// 49: '1',
// 50: '2',
// 51: '3',
// 52: '4',
// 53: '5',
// 54: '6',
// 55: '7',
// 56: '8',
// 57: '9',
// 189: {'_', '-'},
// 187: {'+', '='},

// 65:{'A', 'a', 'Ф', 'ф'},
// 66: {'B', 'b', 'И', 'и'},
// 67: {'C', 'c', 'С', 'с'},
// 68: {'D', 'd', 'В', 'в'},
// 69: {'E', 'e', 'У', 'у'},
// 70: {'F', 'f', 'А', 'а'},
// 71: {'G', 'g', 'П', 'п'},
// 72: {'H', 'h', 'Р', 'р'},
// 73: {'I', 'i', 'Ш', 'ш'},
// 74: {'J', 'j', 'О', 'о'},
// 75: {'K', 'k', 'Л', 'л'},
// 76: {'L', 'l', 'Д', 'д'},
// 77: {'M', 'm', 'Ь', 'ь'},
// 78: {'N', 'n', 'Т', 'т'},
// 79: {'O', 'o', 'Щ', 'щ'},
// 80: {'P', 'p', 'З', 'з'},
// 81: {'Q', 'q', 'Й', 'й'},
// 82: {'R', 'r', 'К', 'к'},
// 83: {'S', 's', 'Ы', 'ы'},
// 84: {'T', 't', 'Е', 'е'},
// 85: {'U', 'u', 'Г', 'г'},
// 86: {'V', 'v', 'М', 'м'},
// 87: {'W', 'w', 'Ц', 'ц'},
// 88: {'X', 'x', 'Ч', 'ч'},
// 89: {'Y', 'y', 'Н', 'н'},
// 90: {'Z', 'z', 'Я', 'я'},
// 186: {':', ';', 'Ж', 'ж'},
// 188: {'<', ',', 'Б', 'б'},
// 190: {'>', '.', 'Ю', 'ю'},
// 191: '',
// 219: {'[', '{', 'Х', 'х'},
// 221: {']','}', 'Ъ', 'ъ'},
// 220: {'|', },
// 222: {'"', "'", 'Э', 'э'},

let letters = {
65: 'a',
66: 'b',
67: 'c',
68: 'd',
69: 'e',
70: 'f',
71: 'g',
72: 'h',
73: 'i',
74: 'j',
75: 'k',
76: 'l',
77: 'm',
78: 'n',
79: 'o',
80: 'p',
81: 'q',
82: 'r',
83: 's',
84: 't',
85: 'u',
86: 'v',
87: 'w',
88: 'x',
89: 'y',
90: 'z'};

let funcButtons = {
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
    37: 'ArrowLeft',
    38: 'ArrowUp',
    40: 'ArrowDown',
    39: 'ArrowRight'};

    var parent = document.createElement("div");
    parent.classList.add('func-buttons');
    document.body.append(parent);

for (let i = 0; i < 41; i++) {
    const num = funcButtons[i];
    if (!funcButtons[i]) {

    } else {
        
        var div = document.createElement("div");
        
        div.className = funcButtons[i];
        div.classList.add('button');
        div.innerHTML = funcButtons[i];

        parent.append(div);

    }
    
    
};

var parentLetters = document.createElement("div");
    parentLetters.classList.add('letters');
    document.body.append(parentLetters);

for (let i = 0; i < 91; i++) {
    const num = letters[i];
    if (!letters[i]) {

    } else {
        
        var div = document.createElement("div");
        
        div.className = letters[i];
        div.classList.add('letter');
        div.innerHTML = letters[i];

        parentLetters.append(div);

    }
    
    
};


document.addEventListener('keydown', function(event) {
    // event.which == 
    var current = document.querySelector('.'+letters[event.which]+'');
    current.classList.add('active');
    console.log(current);
  });

  document.addEventListener('keyup', function(event) {
    // event.which == 
    var current = document.querySelector('.'+letters[event.which]+'');
    current.classList.remove('active');
    console.log(current);
  });