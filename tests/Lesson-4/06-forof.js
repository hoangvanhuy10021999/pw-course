// Ex1

const { reverse } = require("dns");

// const list = [1, 2, 3, 4, 3, 55, 23, 4];

// function findNumber(array, number) {
//     let fistindex = -1;
//     let lastindex = -1;
//     let index = 0;

//     for (let item of array) {
//         if (item === number) {
//             if (fistindex === -1) {
//                 fistindex = index;
//             }
//             lastindex = index;
//         }
//         index += 1;
//     }
//     console.log(`Vi tri dau tien cua ${number} trong mang là ${fistindex}`);
//     console.log(`Vi tri cuoi cung cua ${number} trong mang là ${lastindex}`);
// }
// findNumber(list, 4);

// Ex2

// const name = "Playwright";
// arr = [];

// for (let i of name) {
//     arr.unshift(i)
// }
// console.log(arr);

// Ex3

let arr = [1, 2, 3, 1, 2, 4, 5];
let count = {};

for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (count[value]) {
        count[value] += 1;
    } else {
        count[value] = 1;
    }
}

let uniqueNo = [];
for (let key in count) {
    if (count[key] === 1) {
        uniqueNo.push(key);
    }
}
console.log("các số duy nhất trong mảng:", uniqueNo); 




