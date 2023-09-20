// CRUD => Create, Read, Update, Delete
// 1. Read => odatdagidek console ga malumot chiqarish yani O'qish

// let array = [
//     {id:1,year:1994, name:"Webbrain",},
//     {id:1,year:1997, name:"ebbrain",},
//     {id:1,year:1992, name:"debbrain",},
//     {id:1,year:1991, name:"febbrain",},
// ]

// Read
// let year = (array) =>{
//     let ar = array.sort((a,b)=>a.year- b.year)
//     console.log(ar[0 ]);
// }
// let alif = (array) =>{
//     let ar = array.sort((a,b)=>a.name.localeCompare(b.name))
//     console.log(ar);
// }
// year(array)
// alif(array)

// Update
// const a = (array)=>{
//     array =
// }
// a(id = 5,type: "name","Murodilla")

// let list = [
//   { id: 1, name: "eshmat", title: "CEO" },
//   { id: 2, name: "toshmat", title: "CTO" },
//   { id: 3, name: "eshmat", title: "CEO" },
//   { id: 4, name: "qodirali", title: "CEO" },
//   { id: 5, name: "bolta", title: "CEO" },
// //   { id: 6, name: "tesha", title: "CTO" },
//   { id: 7, name: "begzot", title: "CTO" },
// ];

// const res = (list,str1) =>{
//    str1 = list.filter((v)=>v.title === str1)
//   let str2 = list.filter((v)=>v.title.includes(v.title))
//   let res1 = {}
//    res1.ceo = str1
//    res1.cto = str2
// return res1
// }
// console.log(res(list,"CEO"));
// const create = (name,title) =>{
//     list = [...list,{id:list[list.length - 1].id+1,name,title}]
//     console.log(list);
// }
// create("asadbek","CTO")




// const delete1 = (list, id)=>{
//    let ar = list.filter((v) => v.id !== id)
//    console.log(ar);
   
// }
// delete1(list, 3)

// const read= (list) =>{
//     let tr = list.sort((a,b)=>b.id-a.id)
//     return tr
// }
// console.log(read(list));


// const res = (list, str1, str2) => {
//   let res1 = {str1,str2};
//   str1 = list.filter((v) => v.title.localeCompare(str1.toUpperCase()));
//   str2 = list.filter((v) => v.title.localeCompare(str2.toUpperCase()));
//   res1.str1
//    = str1;
//   res1.str2 = str2;
//   //   console.log(ceo);
//   //   console.log(cto);
//   return res1;
// };
// console.log(res(list,"CEO","CTO"));

// let abj = { id: 5, name: "bolta", title: "CEO" }
// let {id,name,title} = abj
// console.log(id);

// let array = [
//     1,3,5,7,8
// ]
// console.log(array.some((v=> v%2)));
// console.log(array.copyWithin(2, 3, 6));

// const getAdd= (name1, title1)=>{
//     list=[...list,{id:list.length+1 ,name:name1, title:title1}]
    // console.log(list);
// }
// getAdd("Asadbek", "CEO");

