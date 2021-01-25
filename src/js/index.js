
let menuCol = document.getElementById("menu__col");

document.getElementById("burger").addEventListener("mouseenter", () => {
    menuCol.classList.toggle("menuShow");
});

document.getElementById("menu__col").addEventListener("mouseleave", () => {
    menuCol.classList.toggle("menuShow");
});


const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];


// let total = numbers.reduce( (a,b) => {
 
//     if(b > 0) {
//         return a+b;
//     } else return a;

// });

// console.log(total);

// let out = [];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > numbers [i-1]) out.push(numbers[i])
// }

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > numbers [i-1] && numbers[i] > numbers[i+1]) out.push(numbers[i])
// }


// let avg = numbers.reduce((a,b) => a+(b/numbers.length), 0);
// let p1 = numbers.reduce((a,b) => a + (avg - b)**2, 0);
// let p2 = p1/(numbers.length);

// let sortedNumbers = numbers.sort((a,b) => {
//     return b-a;
// });
// let out = sortedNumbers[0];

// for (let i = 0; i < sortedNumbers.length; i++) {
//     if(sortedNumbers[i] < 16) {
//         console.log(sortedNumbers[i]);
//         break;
//     }
// }

// let reversedNumbers = [...numbers].reverse();



// let max = 1;
// let runAsc = 1;
// let runDsc = 1;

// for (let i = 1, j = 1; i < numbers.length, j < numbers.length; i++, j++) {

//     if(numbers[i] > numbers[i-1]) {
//         runAsc += 1;
//     } else {
//         if (runAsc > max) {
//             max = runAsc;
//         }
//         runAsc = 1;
//     }
//     if(numbers[i] < numbers[i-1]) {
//         runDsc += 1;
//     } else {
//         if (runDsc > max) {
//             max = runDsc;
//         }
//         runDsc = 1;
//     }
// }
// if (runAsc > max) max = runAsc;
// if (runDsc > max) max = runDsc;

// console.log(max);




// let sortedNumbers = numbers.sort((a,b) => {
//     return b-a;
// });

// let numbersSet = new Set(sortedNumbers);

// console.log([...numbersSet][1]);




let peak = 1000;
let valley = -1000;

for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1] && numbers[i] < peak) peak = numbers[i];
    if(numbers[i] < numbers[i-1] && numbers[i] < numbers[i+1] && numbers[i] > valley) valley = numbers[i];
}

console.log(peak);
console.log(valley);











