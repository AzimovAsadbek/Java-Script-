// Garbage collaction => object keyn uni qiymatini nullga qayta tenglasak olgingi garbage collaction tushadi
// let obj = {
//     name: "webbrain",
//     id:"AA13214",
//     username:"webbrainacademy"
// }
// obj = null
// console.log(obj);

// Objectni ichida function
// This => ozini parentidagi malumotlani chiqaradi
// function declaration
// let web = {
//   name: "webbrain",
//   id: "AA13214",
//   username: "webbrainacademy",
//   user: function(){
//     // console.log(web.id);
//     console.log(this.id);
//   }
// };
// let web2 = web
// web = null
// web2.user()
//  console.log();

// function expression
// let web = {
//   name: "webbrain",
//   id: "AA13214",
//   username: "webbrainacademy",
//   child() {
//     return "hi";
//   },
// };
// console.log(web.child());

// Arrow function
// let web = {
//   name: "webbrain",
//   id: "AA13214",
//   username: "webbrainacademy",
//   child: () => {
//     return "hi";
//   },
// };
// console.log(web.child());
// Dectructure

// let name = "vektor"
// let web = {
//   name: "webbrain",
//   id: "AA13214",
//   username: "webbrainacademy",
//   child: () => {
//     return "hi";
//   },
//   user: {
//     name1: "WebbrainAcademy"

//   }
// };
// // console.log(web.name, web.id);
// let {name: newname, id, user: {name1}} = web
// console.log(name1);

// Spread operator (...) =>yoyib yuborish
// let web = {
//   name: "webbrain",
//   id: "AA13214",
//   username: "webbrainacademy",
//   user: {
//     name1: "WebbrainAcademy",
//   },
// };

// let user = { ...web.user };
// console.log(user);

// Optonal chainig (?)
// let web = {
//   name: "webbrain",
//   id: "AA13214",
//   username: "webbrainacademy",
//   user: {
//     name1: "WebbrainAcademy",
//   },
// };

// function net(name) {
//   console.log(new.target);
//   return "hi";
// }
// new net();
// let web2 = {...web.user}
// console.log(web2);
// console.log("Hello");
