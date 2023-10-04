// function func(age, name) {
//   console.log("hi", this, age, name);
// }

// let john = {
//   name: "john",
//   age: 25,
// };

// 1.bind, 2.call, 3.apply
// 1.bind
// func.bind(john, john.age, john.name)();
// 2. call
// func.call(john, john.age, john.name)
// 3. apply
// func.apply(john, [john.age, john.name])