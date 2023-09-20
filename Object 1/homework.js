// Tortburchak Yuzi va enini topish
// let rectngle = {
//     boyi: 10,
//     eni: 12,
//     getPrimeter() {
//         let Peremetr = (rectngle.boyi + rectngle.eni) * 2
//         return Peremetr
//     } ,
//     getArea() {
//         let yuzi = rectngle.boyi * rectngle.eni
//         return yuzi
//     }
// }
// console.log(rectngle.getArea());
// ==========

// Doira uzunligi
// let circle = {
//   r: 10,
//   p: 3.14,
//   getCircumference() {
//     let uzunligi = 2 * circle.p * circle.r;
//     return Math.round(uzunligi);
//   },
//   getArea() {
//     let yuza = circle.p * circle.r * circle.r;
//     return yuza;
//   },
// };
// console.log(circle.getCircumference());
// ==========

// let user = {
//     name:"John",
//     surname: "Smith"
// }
// console.log(user);

// user.name = "Pete"
// console.log(user);

// delete user.name
// console.log(user);
// ==========

// let salaries = {
//     john: 100,
//     ann: 160,
//     pete: 130,
// };

// const sum = () => {
//   let javob = 0;
//   for (let pul in salaries) {
//     pul = salaries[pul];
//     javob += pul;
//   }
//   return javob;
// };
// console.log(sum());
// ==========

// let obj = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// const multiplyNumeric = (menu) =>{
//     for (var i in menu){
//         if (typeof(menu[i]) == "number"){
//             menu[i] *=2
//         }
//     }
//     return menu
// }
// console.log(multiplyNumeric(obj));