async function makeAjaxCall() {
  let url = "https://jsonplaceholder.typicode.com/posts/1";

  let result = await fetch(url);
  let data = await result.json();

  console.log(data);
}
