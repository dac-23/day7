async function getAllTodo() {
  let url = `http://localhost:4000/`;
  let res = await fetch(url);
  let data = await res.json();

  console.log(data);
}

async function addTodo() {
  let url = `http://localhost:4000/addtodo`;
  let data = { message: "Hardcoded" };

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
