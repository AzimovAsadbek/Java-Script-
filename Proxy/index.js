// let user = {
//   name: "John",
// };
// const wrap = (target) => {
//     return new Proxy(target, {
//         get(target,prop) {
//         if(!target[prop])throw new ReferenceError(`Property dosn't exis: ${prop}`)
//         else return prop
//     },
//   });
// };

// user = wrap(user)
// console.log(user.name);
// console.log(user.age);


// let arr = [1, 2, 3];
// const ArrayAccs = (target) => {
//   return new Proxy(target, {
//     get(target, prop) {
//         return prop < 0 ? target[target.length + +prop] : target[prop];
//     },
//   });
// };
// arr = ArrayAccs(arr)
// console.log(arr[-1]);
