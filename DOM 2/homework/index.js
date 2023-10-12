let con = document.querySelector(".middlecon");
let list = document.querySelector("ul");
let i = document.querySelector("i");
con.addEventListener("click", () => {
  list.classList.toggle("list-active");
  i.classList.toggle("i");
});

import { dateBase } from "./mock.js";
const coruselContent = document.querySelector(".corusel-con");
const dots = document.querySelector(".dots");
const display = () => {
  dateBase.forEach((v, i) => {
    const images = document.createElement("img");
    const dot = document.createElement("span");
    images.src = v.src;
    if (i == 0) {
      images.classList.add("active-img");
      dot.classList.add("dot-active");
    }
    dot.classList.add("dot");
    coruselContent.append(images);
    dots.append(dot);
  });
};
display();

const img = document.querySelectorAll("img");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const next = () => {
  for (let i = 0; i < img.length; i++) {
    if (img[i].getAttribute("class").includes("active-img")) {
      img[i].classList.remove("active-img");
      dots.children[i].classList.remove("dot-active");
      if (i === img.length - 1) {
        img[0].classList.add("active-img");
        dots.children[0].classList.add("dot-active");
      } else {
        img[i + 1].classList.add("active-img");
        dots.children[i + 1].classList.add("dot-active");
      }
      break;
    }
  }
};

const prev = () => {
  for (let i = 0; i < img.length; i++) {
    if (img[i].getAttribute("class")?.includes("active-img")) {
      img[i].classList.remove("active-img");
      dots.children[i].classList.remove("dot-active");
      if (i !== 0) {
        img[i - 1].classList.add("active-img");
        dots.children[i - 1].classList.add("dot-active");
      } else {
        img[img.length - 1].classList.add("active-img");
        dots.children[img.length - 1].classList.add("dot-active");
      }
      break;
    }
  }
};
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

const parent = document.querySelector(".btn");

const play = () => {
  parent.innerHTML = "";
  for (let i = 1; i <= 100; i++) {
    const btn = document.createElement("button");
    btn.classList.add("stylebtn");
    btn.innerText = i;
    parent.append(btn);
  }
};
play();
let buttons = document.querySelectorAll(".stylebtn");
for (let i = 0; i < 100; i++) {
  buttons[i].addEventListener("click", (e) => {
    let childrennum = e.target.innerText;
    for (let k = 0; k < 100; k++) {
      if (+buttons[k].innerText % childrennum == 0) {
        buttons[k].innerText = "*";
      } else buttons[k].innerText = k + 1;
    }
  });
}
