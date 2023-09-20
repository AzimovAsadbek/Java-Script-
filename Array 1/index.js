// let ar = ["webbrain", "academy", ]
// let search = () => {
//     ar = ar.join("").split("")
//     let w = 0
//     let e = 0
//     let b = 0
//     let r = 0
//     let a = 0
//     let i = 0
//     let n = 0
//     let c = 0
//     let d = 0
//     let m = 0
//     let o = 0
//     for(y of ar){
//         if (y == "w")w++
//         else if (y == "e")e++
//         else if (y == "b")b++
//         else if (y == "r")r++
//         else if (y == "a")a++
//         else if (y == "i")i++
//         else if (y == "n")n++
//         else if (y == "c")c++
//         else if (y == "d")d++
//         else if (y == "m")m++
//         else if (y == "y")o++
//     }
//     l = `w = ${w}
// e = ${e}
// b = ${b}
// r = ${r}
// a = ${a}
// i = ${i}
// n = ${n}
// c = ${c}
// d = ${d}
// m = ${m}
// y = ${o}`
// console.log(l);
// }
// search()

// // let ar = [1,1,1,3]
// // console.log(ar.push("i"),ar);

// const arr = (star, finish, count) => {
//   let ar1 = [];
//   for (let i = star.charCodeAt(); i <= finish.charCodeAt(); i += count) {
//     ar1.push(String.fromCharCode(i));
//   }
//   console.log(ar1);
// };
// arr("a", "z", 1);

// let ar = [12,34,4,4,"webbrain",null, undefined,true]
// let ar = []
// let ar1 = new Array(2)
// console.log(ar.length);
// console.log(ar1.length);
// console.log(ar.length);

// Array elementlarini chaqirish
// let ar = [1, 2, 3, 4];
// console.log(ar[1]);
// console.log(ar[-1]);
// console.log(ar.at(-1));

// console.log([] == 0);

// let ar = [1, 2, 3, 4];
// console.log(ar);
// console.log(ar.join(" "));

// Arraylarni bir biriga qoshish
// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7, 8, 9];
// console.log(ar1 + ar2);
// let ar3 = ar1.concat(ar2);
// console.log(ar3);

// type Of arrey
// let ar = [1, 2, 3, 4];
// console.log(typeof ar);
// console.log(Array.isArray(ar));

// arrayga malumot qoshish
// let ar = [1, 2, 3, 4];
// console.log(ar.push(5), ar);
// console.log(ar.unshift(0), ar);

// arraydan malumotni ochirish
// let ar = [1, 2, 3, 4];
// console.log(ar);
// console.log(ar.pop());
// console.log(ar.shift());
// console.log(ar);

// let ar = [1, 2, 3, 4];
// console.log(ar);
// console.log("olib tashlangan qiymat", ar.splice(1, 3), "natija", ar);
// console.log("olib tashlangan qiymat", ar.slice(1, 3), "natija", ar);

// Loops
// let ar = [1, 2, 3, 4, "webbrain"];
// for (let i = 0; i <= ar.length; i++) {
//     console.log(ar[i]);
// }

// for(i of ar){
//     console.log(i);
// }
// for(i in ar){
//     console.log(i);
// }

// let ar = [1, 2, 3, 4];
// console.log(ar.indexOf(1));
// console.log(ar.lastIndexOf(1));

// Strindan arrayga otkazish
// let str = "1 2 3"
// console.log(str.split(" "));

// let ar = [1, 2, 3, 4];
// console.log(ar);
// console.log(ar.reverse());

// let ar = [1, 2, 3, 4];
// console.log(ar.includes(9));