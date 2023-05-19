// HOOK :: this helps to call the function;
// while page is getting loaded.
window.addEventListener("load", () => {
  console.log("CALLED WHILE LOAD");
  getAllTodo();
});

async function getAllTodo() {
  let url = `http://localhost:4000/`;
  let res = await fetch(url);
  let data = await res.json();

  console.log(data);
  // DOM OPR
  for (let item of data) {
    let parent = document.querySelector("#parent");
    let existingElement = parent.innerHTML;
    let newElement = `<h1>${item.message}</h1>`;

    parent.innerHTML = newElement + existingElement;
  }
}

async function addTodo() {
  let inputTodoTag = document.querySelector("#todoid");
  let todoValue = inputTodoTag.value || "hardcoded";

  let url = `http://localhost:4000/addtodo`;
  let data = { message: todoValue };

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // clear the box
  inputTodoTag.value = "";

  // refresh
  getAllTodo();
}
