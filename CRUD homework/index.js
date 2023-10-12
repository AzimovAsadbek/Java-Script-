let students = [
  { id: 1, year: 2007, name: "Yusupov Bexruz" },
  { id: 2, year: 2007, name: "Murodillayev Xurshid" },
  { id: 3, year: 2007, name: "Sodiqjanov Asatillo" },
  { id: 4, year: 2006, name: "Umaraliyev, Iqboljon" },
  { id: 5, year: 2005, name: "Tohirov, Azizbek" },
  { id: 6, year: 2007, name: "Murodillayev Xojiakbar" },
];

let newName = "";
let newAge = 0;

const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
let id = 0;
// yaratish
const display = (base) => {
  if (base.length) {
    tbody.innerHTML = "";
    base.map((v) => {
      id == v.id
        ? (tbody.innerHTML += `
    <tr>
      <td>${v.id}</td>
      <td><input type="number" value="${v.year}" id="age"></td>
      <td><input type="text" value="${v.name}" id="name"></td>
      <td><button class="delete">Delete</button></td>
      <td>
        <button onclick="onSave()" class="editbtn">Save</button>
        <button onclick="cancel()" class="deletebtn">Cancel</button>
      </td>
    </tr>
    `)
        : (tbody.innerHTML += `
<tr>
<td>${v.id}</td>
<td>${v.year}</td>
<td>${v.name}</td>
<td>
<button class="delete" onclick="onDelete(${v.id})">Delete</button>
</td>
<td>
<button onclick="edit(${v.id})" class="edit">Edit</button>
</td>
</tr>`);
    });
  } else {
    table.innerHTML = `<h1>Not Faund<h1>`;
  }
};
display(students);

// Update | O'zgartirish
const edit = (i) => {
  id = i;
  display(students);

  let name = document.querySelector("#name");
  let age = document.querySelector("#age");

  name.addEventListener("change", (e) => {
    newName = e.target.value;
  });
  age.addEventListener("change", (e) => {
    newAge = e.target.value;
  });
};

// Save | Saqlash
const onSave = () => {
  students.filter((v) =>
    v.id == id
      ? ((v.year = newAge > 0 ? newAge : v.year),
        (v.name = newName.length ? newName : v.name))
      : v
  );
  id = 0;
  display(students);
};

// Cancel
const cancel = () => {
  id = 0;
  display(students);
};

// Delete | O'chirish
const onDelete = (id) => {
  students = students.filter((v) => v.id != id);
  display(students);
};

// Search | Qidiruv
const search = document.querySelector(".search");
search.addEventListener("input", (e) => {
  let searchValue = e.target.value.toLowerCase();
  students = students.filter((v) => v.name.toLowerCase().includes(searchValue));
  display(students);
});

// Kreate
let addyear = document.querySelector(".addyear");
let addname = document.querySelector(".addname");
let addBtn = document.querySelector(".createBtn");

let nameValue = "";
let yearValue = 0;
addyear.addEventListener("input", (e) => {
  yearValue = e.target.value;
});
addname.addEventListener("input", (e) => {
  nameValue = e.target.value;
});
const create = (object) => {
  if (object.length) {
    students = [
      ...students,
      { id: students[students.length - 1].id + 1, ...object },
    ];
    display(students);
    addname.value = "";
    addyear.value = "";
  } else alert("Malumot kiriting!");
};
addBtn.addEventListener("click", () =>
  create({ year: yearValue, name: nameValue })
);

// Sort | Joylashuv tartibi
let sortbtn = document.querySelector("#sort");
sortbtn.addEventListener("click", (e) => getUser(e.target.value));
function getUser(value) {
  switch (value) {
    case "id": {
      students = students.sort((a, b) => a.id - b.id);
      display(students);
    }break
    case "name": {
      students = students.sort((a, b) => a.name.localeCompare(b.name));
      display(students);
    }break
    case "year": {
      students = students.sort((a, b) => a.year - b.year);
      display(students);
    }break
  }
}
