let textArea = document.createElement('textarea');

document.body.append(textArea);

// let funcButtons = {
//     27: 'Esc',
//     8: 'Backspase',
//     9: 'Tab',
//     20: 'CapsLock',
//     16: 'Shift',
//     17: 'Ctrl',
//     91: 'Win',
//     93: 'Win',
//     18: 'Alt',
//     32: 'Space',
//     13: 'Enter',
//     46: 'Del',
//     37: 'ArrowLeft',
//     38: 'ArrowUp',
//     40: 'ArrowDown',
//     39: 'ArrowRight'};

//charCode dont work it get 0 any time

let arrKeyCodeFirst = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61, 8];

let serviceButtons =  [9, 20, 16, 17, 18, 32, 18, 17, 16, 13, 8, 46, 37, 38, 40, 39];

let firstLineLetters = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];

let keyCodeArr = [];

// let charCodeArr = [];

document.onkeydown = function (event) {
    // console.log(event);
    keyCodeArr.push(event.keyCode);
    // charCodeArr.push(event.charCode);
    console.log(keyCodeArr);
    // console.log(charCodeArr);
}

//     var parent = document.createElement("div");
//     parent.classList.add('func-buttons');
//     document.body.append(parent);
//
// for (let i = 0; i < 41; i++) {
//     const num = funcButtons[i];
//     if (!funcButtons[i]) {
//
//     } else {
//
//         var div = document.createElement("div");
//
//         div.className = funcButtons[i];
//         div.classList.add('button');
//         div.innerHTML = funcButtons[i];
//
//         parent.append(div);
//
//     }
//
//
// };

let printLetters = function (arr, parentDiv) {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];

        var div = document.createElement("div");

        div.className = 'button-'+String(el);
        div.classList.add('letter');
        div.innerHTML = String.fromCharCode(el);

        parentDiv.append(div);
    }
};

var parentLetters = document.createElement("div");
    parentLetters.classList.add('letters');
    document.body.append(parentLetters);



printLetters(arrKeyCodeFirst, parentLetters);

printLetters(firstLineLetters, parentLetters);


document.addEventListener('keydown', function(event) {
    // event.which == 
    var current = document.querySelector('.button-'+String(event.keyCode)+'');
    current.classList.add('active');
    console.log(current);
  });

  document.addEventListener('keyup', function(event) {
    // event.which == 
    var current = document.querySelector('.button-'+String(event.keyCode)+'');
    current.classList.remove('active');
    console.log(current);
  });