// Ex1
// sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// Ex2
// for (let i = 2; i <= 9; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i * j}`)
//     }
// }

// Ex3
// arr = [];
// for (let i = 1; i <= 99; i++){
//     if (i % 2 != 0){
//         arr.push(i);
//     }

// }
// console.log(arr);

// Ex4
// for (let i = 1; i <= 10; i++) {
//     console.log(`user-${i}@example.com,`)
// }
profit = 0;

let listMonth = [
    { month: 1, total: 100 },
    { month: 2, total: 100 },
    { month: 3, total: 100 },
    { month: 4, total: 100 },
    { month: 5, total: 100 },
    { month: 6, total: 100 },
    { month: 7, total: 100 },
    { month: 8, total: 100 },
    { month: 9, total: 100 },
    { month: 10, total: 100 },
    { month: 11, total: 100 },
    { month: 12, total: 100 },
]
for (let i = 0; i < listMonth.length; i++) {
    profit += listMonth[i].total;
}

console.log(profit);
