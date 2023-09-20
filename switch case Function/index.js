// Switch case
// let obhavo = "qor"

// switch(obhavo){
//     case ("quyoshli"): console.log("Bugun havo issiq");break
//     case ("yomgir"): console.log("Bugun yomgir yogadi");break
//     case ("qor"): console.log("Bugun qor yogadi");break
//     case ("dol"): console.log("Bugun do'l yogadi");
// }

// Function
//! Function declaratin

// let name = "iqbol"
// console.log(name);

// function sayHi(){
//     console.log("Hello");
// }
// sayHi()

// Function expression
// let sayHi = function(){
//         console.log("hello");
//     }
//     sayHi()

// arrow function
// const getAvr = (a, b, c) => {
//     // console.log((a + b + c) / 3);
//     return (a + b + c) / 3
// }
// console.log(parseInt(getAvr(14, 12, 7.2)));

// const fizbuz = (n) => {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 9 === 0) console.log(`${i} FizBuzz`)
//         else if (i % 3 === 0) console.log(`${i} Fizz`);
//         else if (i % 9 === 0) console.log(`${i} Buzz`);
//         else console.log(i);
//     }
// }
// fizbuz(prompt())

// sonni palindrommlikka tekshirish
// const isPalindrom = (number) => {
//     let yuzlik, unlik, birlik
//     yuzlik = parseInt(number / 100)
//     unlik = parseInt((number - yuzlik * 100) / 10)
//     birlik = number % 10
//     number2 = birlik * 100 + unlik * 10 + yuzlik
//     return number === number2
// }
// console.log(isPalindrom(Number(prompt())));
