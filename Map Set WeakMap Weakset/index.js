// const calcfib = (n) => {
//   if (n === 0 || n === 1) return n;
//   if (n === 2) return 1;
//   console.log(calcfib(n -1));
//   console.log(calcfib(n -2));
//   return calcfib(n - 1) + calcfib(n - 2);
// };
// console.log(calcfib(5));


// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alce", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     interneles: [{ name: "Jeck", salary: 1300 }],
//     integer: {
//       state: [{ name: "Anna", salary: 1200 }],
//     },
//   },
// };
// function calcSalary(e) {
//     if (Array.isArray(e)) {
//       return e.reduce((prev, current) => {
//         return prev + current.salary;
//         // console.log(current.salary);
//       }, 0);
//     } else {
//       let sum = 0;
//       // console.log(Object.values(e));
//       for (let evant of Object.values(e)) {
//         sum = sum + calcSalary(evant);
//         // console.log(sum);
//       }
//       return sum;
//     }
//       console.log(sum);
//   }

// console.log(calcSalary(company));

