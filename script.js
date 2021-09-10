"use strict";

console.log("js is working fine ");

const mainbody = document.querySelector(".mainbody");
const contmain = document.querySelector(".contmain");
// input fields
const todo = document.querySelector("#todo");
const time = document.querySelector("#time");
const btn = document.querySelector("#btn");
const form = document.querySelector("#form");

// const todo = document.querySelector("");
// const todo = document.querySelector("");
// const todo = document.querySelector("");
let arr = new Array();

btn.addEventListener("click", function () {
  let whatToDo = todo.value;
  // let whatTime = time.value;
  const markup = `
  <main class="mainbody">
  <div class="todo">
      ${whatToDo}
  </div>
  <div class="delete"> <i class="fas fa-trash-alt"></i></div>
</main>
    `;
  form.reset();
  contmain.insertAdjacentHTML("afterbegin", markup);

  // setting item to the local storage
  // arr;
  // let list = arr.push(whatToDo);
  // console.log(arr);
  // localStorage.setItem("new todo", JSON.stringify(arr));
  const delet = document.querySelector(".delete");

  delet.addEventListener("click", function () {
    const deleteelement = delet.parentElement;
    console.log(deleteelement);
    deleteelement.remove();
  });
});

// function showtasks() {
//   let stored = JSON.parse(localStorage.getItem("new todo"));
//   // console.log(stored);

//   stored.forEach((e) => {
//     console.log(e);

//     let markup = `
//     <main class="mainbody">
//   <div class="todo">
//       ${e}
//   </div>
//   <div class="delete"> <i class="fas fa-trash-alt"></i></div>
// </main>
//     `;

//     contmain.insertAdjacentHTML("beforebegin", markup);
//   });
// }
// showtasks();

// making the delete function
