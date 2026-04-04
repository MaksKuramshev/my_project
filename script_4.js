"use strict"

first: for (let i = 0; i < 3 ; i++) {
    console.log(`First level: ${i}`); // 0, 1, 2 (i);
    for (let j = 0; j < 3 ; j++) {
        console.log(`Second level: ${j}`); // 0, 1, 2 (j);
        for (let k = 0; k < 3 ; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`); // 0, 1, 2 (k);
        }
    }
}


//////////////////////////////////////

let result = '';
const length = 7;

for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

////////////////////////////////////

 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }



let i = 2;

while (i < 16) {
    if (i % 2 === 0) {
        i++; // Увеличиваем перед тем, как выйти из итерации
        continue;
    } else {
        console.log(i);
    }
    i++;
}


let arr = [];

for (let i = 5; i < 11; i++) {
    arr[i - 5] = i;
}

console.log(arr);