// Ex1
// function measurementBMI(height, weight) {
//     let bmi = weight / (height * height);
//     if (bmi < 18.5) {
//         return "Thieu can";
//     } else if (bmi >= 18.5 && bmi < 25) {
//         return "Binh thuong";
//     } else if (bmi >= 25 && bmi < 30) {
//         return "Thua Can";
//     } else {
//         return " Beo Phi";
//     }
// }

// console.log(measurementBMI(1.78, 70));

// Ex2
// function converts(temperature, type){
//     if (type === "C" ){
//         return `${temperature *9/5 + 32} oF`;
//     } else if (type === "F"){
//         return `${(temperature - 32) *5 /9} oC`;
//     }
// }

// console.log(converts(50,"C"));

// Ex3
// let arr = [2, 3, 4, 5];
// function sumNumber() {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumNumber(arr));

//Ex4

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function fillerArr(arr) {
    let primesArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i]) === true) {
            primesArr.push(i);
        }
    }
    return primesArr;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(fillerArr(arr));


//Ex5

// let users = [
//     { name: "Huy", email: "huy@gmail.com" },
//     { name: "Chi", email: "chi@gmail.com" },
//     { name: "Minh", email: "minh@gmail.com" }
// ];

// function updateMail(name, newEmail) {
//     let found = false;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].name === name) {
//             users[i].email = newEmail;
//             found = true;
//         }
//     }
//     if (found === false) {
//         console.log(`No find name ${name}`);
//     }

// }

// updateMail("Huy", "HuyHoang@gmail.com")
// updateMail("hi", "KimChi@gmail.com")
// console.log(users)

//Ex6

// let result = [
//     { name: "Huy", score: 80 },
//     { name: "Chi", score: 95 },
//     { name: "Minh", score: 100 }
// ];

// function average(result){
//     sum = 0;
//     for (let i = 0; i < result.length; i++){
//         sum+= result[i].score;
//     }
//     return `Average: ${sum/ result.length}`;
// } 

// console.log(average(result));

// Ex7

// let schoolSupplies = [
//     { name: "Pen", price: 2 },
//     { name: "Eraser", price: 2 },
//     { name: "Ruler", price: 2 }
// ];

// function checkPrice(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].price === 0){
//             return false;
//         }
//     }return true;
// }
// const result = checkPrice(schoolSupplies);
// if (result ===false){
//     console.log("trong gio hang  co san pham gia 0 dong")
// }else{
//     console.log("trong gio hang khong co san pham gia 0 dong")
// }

// Ex8

// function checkOpenTime(time){
//     if (time >= 9 && time <= 21){
//         console.log("Open");
//     }else if (time < 0 || time > 24){
//         console.log("Invalid Time. Try again");
//     }else{
//         console.log("Close");
//     }
//     return;
// }

// checkOpenTime(25);

// Ex9

// function ticketPrice(age) {
//     if (age <= 0 ) {
//         return "Invalid age";
//     } else if (age < 5) {
//         return "Miễn phí";
//     } else if (age >= 6 && age <= 17) {
//         return "Giá vé: 50,000 VNĐ";
//     } else {
//         return "Giá vé: 100,000 VNĐ";
//     }
// }

// console.log(ticketPrice(25)); 

// Ex10

// function printMonthName(monthNumber) {
//     switch (monthNumber) {
//         case 1:
//             console.log("Tháng Một");
//             break;
//         case 2:
//             console.log("Tháng Hai");
//             break;
//         case 3:
//             console.log("Tháng Ba");
//             break;
//         case 4:
//             console.log("Tháng Tư");
//             break;
//         case 5:
//             console.log("Tháng Năm");
//             break;
//         case 6:
//             console.log("Tháng Sáu");
//             break;
//         case 7:
//             console.log("Tháng Bảy");
//             break;
//         case 8:
//             console.log("Tháng Tám");
//             break;
//         case 9:
//             console.log("Tháng Chín");
//             break;
//         case 10:
//             console.log("Tháng Mười");
//             break;
//         case 11:
//             console.log("Tháng Mười Một");
//             break;
//         case 12:
//             console.log("Tháng Mười Hai");
//             break;
//         default:
//             console.log("Số tháng không hợp lệ. Nhập từ 1 đến 12.");
//     }
// }
// printMonthName(1);   
// printMonthName(12);  
// printMonthName(15);  


// Ex11

// function grades(n) {
//     if (n >= 8 && n <= 10) {
//         return "gioi";
//     } else if (n < 8 && n > 6.5) {
//         return "kha";
//     } else if (n < 6.5 && n > 5) {
//         return "trung binh";
//     } else if (n < 5) {
//         return "yeu";
//     } else {
//         return "khong co"
//     }
// }
// console.log(grades(6));


// Ex12

// function weather(temp) {
//     if (temp >= 30) {
//         return "nong";
//     } else if (temp < 30 && temp >= 20) {
//         return "mat"
//     } else {
//         return "lanh"
//     }
// }

// console.log(weather(15));
