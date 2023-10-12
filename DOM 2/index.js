let input = document.querySelector("input");
//! Attribute Monupulation
//? getAttribute("AttributeName") -> Atribute qiymatini olib beradi
// console.log(input.getAttribute("placeholder"));

//? setAttribute("AttributeName", "newValue") -> ichida bolmasa qoshadi
// input.setAttribute("type", "password")
// input.setAttribute("placeholder", "password")
// console.log(input.getAttribute("type"));

//? hasAttribute("type") -> ichida shu attribut bor ekanligini tekshirib beradi
// console.log(input.hasAttribute("placeholder"));

// removeAttribute("AttributeName") -> ichidagi attribute ochiradi

//! Creating an element
// createElement("elementName") -> yangi html elemt yaratib beradi
// const body = document.querySelector("body");
// const container = document.createElement("div");
const wrapper = document.querySelector(".wrapper");
// body.prepend(container)
// body.append(container)
// wrapper.prepend(container)
// wrapper.append(container)
// wrapper.before(container)
// wrapper.after(container)

//! Styling JS
//? Style
// wrapper.style.backgroundColor = "red"
// wrapper.style.border = "1px solid black"
// wrapper.style.borderRadius = "6px"

//? cssText
// wrapper.style.cssText = `
//     color: red;
//     background-color: blue;
// `;

//! ClassList
//? add -> yangi class qoshadi
// wrapper.classList.add("wrp")
//? remove -> classni o'chiradi
// wrapper.classList.remove("wrp")
//? toggle -> bolsa ochiradi bolmasa qoshadi
// wrapper.classList.toggle("box")
// wrapper.classList.toggle("box")

// Clone element
// cloneNode(true)
// let clone = wrapper.cloneNode(true)
// console.log(wrapper);
// console.log(clone);

//! Geometry
// wrapper.style.cssText = `
//     border: 1px solid black;
//     height: 150px;
//     overflow: auto;
// `
//? offsetWidth
// console.log(wrapper.offsetWidth);

//? offsetHeight
// console.log(wrapper.offsetHeight);

//? clientWidth
// console.log(wrapper.clientWidth);

//? clientHeight
// console.log(wrapper.clientHeight);

//? scrollHeight
// console.log(wrapper.scrollHeight);

//? scrollWidth
// console.log(wrapper.scrollWidth);
  
function clicked(){
//   internet ishlamayapdi ha
//     
}