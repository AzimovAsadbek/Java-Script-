// Class
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }
// let obj = new Person("User", 18);
// console.log(obj);
// let user = new Person()
// console.log(user);
// let user2 = new Object()
// let user3 = new Array(1,2,3,4)
// console.log(user2);
// console.log(user3);

// class Animal {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     voice(){
//         console.log(`This is ${this.name}'s voice`);
//     }
// }
// let dog = new Animal("Kuchuk", 4)
// let cat = new Animal("Mushuk", 4)
// console.log(dog.voice());
// console.log(cat);
// let dog  = {
//     name:"kuchuk",
//     age: 4,
//     voice: function(){
//         console.log(`This is ${this.name}'s voice`);
//     }
// }
// console.log(dog);

// getter, setter
// class User {
//     #password = 2020
//     constructor(login){
//         this.login = login
//     }
//     get password(){
//         console.log(this.#password);
//     }
//     set changePassword(newPassword){
//         this.#password = newPassword
//     }
// }
// let part1 = new User()
// part1.password
// part1.changePassword = 1234
// part1.password

//! inheritance
// class Animal {
//     age = 2
//     constructor(name){
//         this.name = name
//     }
// } 
// class Dog extends Animal {
//     constructor(name){
//         super()
//         this.name = name
//     }
// }
// let cat = new Dog("mushuk")
// console.log(cat);

// class MyArray extends Array {
//     push(){
//         console.log("Push");
//     }
// }
// let ar = new MyArray() 
// console.log(ar.push(1));
// console.log(ar);

class Person {
    static age = 24 
     calculateBirthYear(){
        console.log(2023 - Person.age)
    }
}
let user = new Person()
console.log(user.calculateBirthYear());
// console.log(Person.calculateBirthYear());