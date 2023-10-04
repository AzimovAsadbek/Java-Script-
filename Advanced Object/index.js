// let user = {
//   login: "user1",
//   password: 123,
// };
// Object.defineProperty(user, "login", { writable: false })
// Object.defineProperty(user, "login", { configurable: false })
// delete user.login
// Object.defineProperty(user, "login", { enumerable: false })
// for(let i in user){
//     console.log(i);
// }
// console.log(user);
// console.log(Object.getOwnPropertyDescriptor(user,"login"));

//! Object.preventExtensions()
// console.log(user);
// Object.preventExtensions(user)
// console.log(user);
// user.name = "us"

//! getter, setter
let user = {
  login: "user1",
  password: 123,
  details: "first course",
  get showInfo() {
    console.log(this.login, this.password);
  },
  set changeLogin(name){
    this.login = name
    console.log(this.login);
  }
};
// user.showInfo
user.changeLogin = "USER"
console.log(user);