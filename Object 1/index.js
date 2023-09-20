// Object
// let user1 = {
//   "name_1": "farhod",
//   age: 16,
//   country: "Uzbekistan",
// };
// console.log(user1.name);
// console.log(user1["name_1"]);

// let user2 = new Object({
//   name: "farhod",
//   age: 16,
//   country: "Uzbekistan",
// });
// console.log(user2);

// let title = "name";
// let obj = {
//   name: "webbrain",
//   title: "IT Center",
//   name: "Webbrain Academy",
//   title: "name",
// };
// console.log(obj.title);
// console.log(obj["name"]);

// let name = "farhod"
// let age = 17
// let obj = {
//     name,
//     age
// }
// console.log(obj);

// title = "country"
// let user1 = {
//   name: "farhod",
//   age: 16,
//   country: "Uzbekistan",
// };
// user1.age = 12
// user1[title] = "Kirgizistan"
// console.log(user1);

// title = "country"
// let user1 = {
//   name: "farhod",
//   age: 16,
//   country: "Uzbekistan",
// };
// delete user1[title]
// console.log(user1);

//Muzlatish object.freeze(user1)
// title = "country"
// let user1 = {
//   name: "farhod",
//   age: 16,
//   country: "Uzbekistan",
// };
// Object.freeze(user1)
// user1.name= "iqbol"
// delete user1.age
// console.log(user1);

// title = "country"
// let user1 = {
//   name: "farhod",
//   country: "Uzbekistan",
// };

// user1.age = 17
// console.log(user1);

// let user1 = {
//   name: "farhod",
//   age: 16,
//   country: "Uzbekistan",
// };
// Object.seal(user1)
// user1.name= "farhod"
// delete user1.age
// user1.username = "1213"
// console.log(user1);

// let user1 = {
//   name: "farhod",
//   age: 16,
//   country: "Uzbekistan",
// };

// let user2 = structuredClone(user1)
// let user2 = user1
// user1.age = 25
// console.log(user1);
// console.log(user2);

// let user1 = {
//   name: "farhod",
//   age: 16,
//   country: "Uzbekistan",
// };
// let user2 = {
//   username: "rahmatullayev",
//   country: "Uzbekistan",
// };
// let user3 = {
//     number:1313
// };

// console.log(Object.assign(user3, user2,user1));

// console.log("username" in user1);
// for (let i in user1){
//     console.log(user1[i]);
// }

// let turtburchak = {
//     b: 12,
//     e: 20,
//     pereremetr()  {
//         console.log((turtburchak.b+turtburchak.e) * 2);
//     }
// }
// turtburchak.pereremetr()

const person = {
  name: "Grandfather",
  age: 90,
  child: {
    name: "Father",
    age: 50,
    child: {
      name: "Son",
      age: 25,
      child: {
        name: "kid",
        age: 1,
      },
    },
  },
};


// const calcAge = (object) => {
//   let sum = 0;
//   while (object) {
//     sum += object.age;
//     object= object.child
//   }
//   return (sum);
// };
// console.log(calcAge(person));

// const calcAge = (object) => {
//    let sum = 0
//     do {
//         sum += object.age
//         object = object.child
//     }while (object)
//     return sum
// };
// console.log(calcAge(person));

// Destructue
const {
    name,
    age,
    child: {
      name: fathern,
      age: fathera,
      child: {
        name: boyn,
        age: boya,
        child: { name: childn, age: childa },
      },
    },
  } = person;
  console.log(name, age, fathern, fathera, boyn, boya, childn, childa);