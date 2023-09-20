// Agar n >= 5 bizga 1 boshqa payt 0 qaytsin
// const hs = (n) => {
//     let p = "";
//   for (let i = 0; i <= n.length - 1; i++) {
//     if (n[i] >= 5) p += 1;
//     else p += 0
//   }
//   return p
// };
// hs("45385593107843568");

// const odd = (num) => {
//     let newnum = num.toString().split("")
//     let ar = []
//     for(let i = 0; i < newnum.length; i++){
//         ar.push(newnum[i])
//         if(newnum[i] % 2 == 1 && newnum[i + 1] % 2 == 1) ar.push("-")
// }
// console.log(ar.join(""));
// }
// odd(1231)

// const tidy = (n) => {
//   let a = String(n);
//   for (let i = 0; i <= a.length - 1; i++) {
//     if (a[i] > a[i + 1]) return false;
//   }
//   return true;
// };
// console.log(tidy(565576042));

// const capitalis = (word) => {
//     let index = []
//   for (let i = 0; i < word.length; i++) {
//     if(word[i] == word[i].toUpperCase())index.push(i)
// }
// return index
// };
// console.log(capitalis("VFadnH"));

// const points = (games) => {
//     let ok = null;
//     let shot = 0;
//     for (let i = 0; i <= games.length - 1; i++) {
//       let game = games[i];
//       let b = game.split(":");
//       ok = b.join("");

//       for (let k = 0; k < game.length -2; k++) {
//         if (ok[k] > ok[k + 1]) shot += 3;
//         else if (ok[k] == ok[k + 1]) shot++;
//         else shot += 0;
//       }
//     }
//     console.log(shot);
//   };
//   let games = ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]
// points(games)

// function noSpace(x){
//     let a = x.split(" ")
//     a = a.join("")
//    }
//    noSpace("eggf foiwhg78 yg  2ue87 ")
// x = [
//     1,2,3,4
// ]
// for (let a of x){

// }

// let a = ["3", "123124234", undefined, "needlebeqh"];
// const niddle = (haystack) => {
//   let b = 0;
//   for (let i = 0; i <= haystack.length; i++) {
//     haystack[i] === "needle" ? (b = i) : (b += 0);
//   }
//   if (b <= 0) {
//     return  "Your function didn't return anything";
//   } else return `found the needle at position ${b}`;
// };
// console.log(niddle(a));

// function openOrSenior(data){
//     let result = []
//     for(let [age, handicap] of data){
//         age > 55&&handicap>7?result.push("Senior"):result.push("Open")
//     }
//     return result
//   }
// let  openOr = [ [45, 12],[55,21],[19, -2],[104, 20]]
// console.log(openOrSenior(openOr));