// filter ((value, index, array) => {})
// ? 1.Aylanib chiqadi
// ? 2.Filter qiladi

// [1,2,3,4,5] => [2,4]
// let ar = [1,2,3,4,5]

// let result = []
// for (let i of ar){
//   if (i%2==0)result.push(i)
// }
// console.log(result);

//  let result = ar.filter(v => v % 2 == 0)
//  console.log(result);

// sort ((a,b) =>{})
// let ar = [3, 5, 12, 15,1]
// let result = ar.sort((a,b)=> b -a)
// console.log(result);

//! find ((v,i,a) => {})
// let ar = [1,2,3,4,5,6,3]
// let a = 0
// let result = ar.find((v) =>{
//   a++
//   return v == 3
// })
// console.log(result);
// console.log(a);

// findIndex => index raqami
// let ar = [1,2,3,4,5,6]
// let result = ar.findIndex((v) => v == 3)
// console.log(result);

// FindLastIndex => orqadan hisoblab beradi
// let ar = [1,2,3,4,5,3,6]
// let a = 0
// let result = ar.findLastIndex((i,v) => {
//   a++
//  return v == 2

// })
// console.log(result);
// console.log(a);

//! forEach((v, i, a) => {})
// [1, 2, .. 10]
// let sum = 0;
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.forEach((v) => (sum += v));
// console.log(sum);
// // console.log(newArray);

//! map((v, i, a) => {})
// [1, ..., 10] => [1, "juft", 3, "juft"]
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.map(v => v % 2 === 0 ? "juft" : v);
// let sum =0
// let newArray = array.map((v) => (sum += v));
// console.log(sum);
// console.log(array);
// console.log(newArray);

// let str = "dduyqgy egv ojf jh uefy"
// function dropCap(n) {
//   n = n.split(" ")
//   let p = []
//   for(let i of n){
//    if(i.length>2) {for(let k = 0;k<=i.length;k++){
//         console.log(i.startsWith(i[k]));
//     }}
//     // console.log(i[0]);
//     // console.log(" ");
// }
// // console.log(p);
// // console.log();
// }
// console.log(dropCap(str));

// let str = "Murodillayev Hojiakbar     "
// let letterCount = {
// }

// for (let i = 0; i < str.length; i++) {
//     if (letterCount[str[i]]) {
//         letterCount[str[i]]+=1
//     }else{
//         letterCount[str[i]]=1
//     }
// }

// for (let i = 0; i < Object.keys(letterCount).length; i++) {
//     console.log(`${Object.keys(letterCount)[i]}: ${letterCount[Object.keys(letterCount)[i]]}`);
// }

// let friends = ["Ryan", "Kieran", "Mark","1558",1221]
// friends = friends.filter((v) => v.length == 4 )
// console.log(friends);

// function validatePIN(pin) {
//     if (pin.length === 4 || pin.length === 6) {
//         pin = parseInt(pin)
//         // console.log(pin[0]);
// }
//   return false;

// pin = pin.split("")
// pin = Number(pin)

// }
// console.log(validatePIN("1421"));

// function paperwork(n, m) {
//     if(n > 0 && m > 0)return n*m
//     else return 0
//   }
// console.log(paperwork(5,8));

// var number = function(busStops){
//     busStops = busStops.flat()
//     let b = ''
//     for(let i in busStops){
//         if(i % 2 == 0)b+=i
//     }
//     for
// }
// console.log(number([[10,0],[3,5],[5,8]]));

// const removeSmallest = (number) =>
//   number.filter((_, i) => i != number.indexOf(Math.min(...number)));

// let number = [1, 2, 3, 4, 5];
// console.log(removeSmallest(number));

// const repeatStr = (n, s) => {
//   let a = "";
//   for (let i = 1; i <= n; i++) a += s;
//   return a
// };
// repeatStr(3,"hello ")

// function disemvowel(str) {
//   const sum = "auoeiAUOEI";
//   let y = "";
//   for (let k = 0; k < str.length; k++) {
//     const char = str[k];
//     if ((sum.indexOf(char) === -1 || char === "y")) {
//       y += char;
//     }
//   }
//   return y
// }
// console.log(disemvowel("qDFGHuegh"));
// let ar = [
//   { id: 1, year: 2007, name: "Asadbek" },
//   { id: 1, year: 1097, name: "Muslima" },
//   { id: 2, year: 2001, name: "Hojiakbar" },
//   { id: 3, year: 2007, name: "Shaxzoda" },
//   { id: 4, year: 2004, name: "Xurshid" },
//   { id: 5, year: 2007, name: "Behruz" },
//   { id: 6, year: 2007, name: "Behruz" },
// ];
// let ar1 = [4, 2, 6, 7, 8, 90, 3, 1];
// let newar = ar.filter((v)=>v.id > 5)
// let newar = ar1.copyWithin(0,2,5);
// let newar = ar.sort((a,b)=> a.name.localeCompare(b.name))
// console.log(newar);

// let result = ar.sort((a,b) => a - b)
// console.log(result);

// 
// let obj = "asadbek"
// console.log(obj.substring(4,5));
// console.log(obj);