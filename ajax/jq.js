function makeAjaxCall() {
  let postTag = document.querySelector("#postid");
  let url = `https://jsonplaceholder.typicode.com/posts/${postTag.value || 1}`;

  // REQ
  let jqxhr = jQuery.get(url);

  // RES
  jqxhr.done((data) => {
    // DOM
    let parentTag = document.querySelector("#parent");
    let newValue = `<h1>${data.body}</h1>`;
    parentTag.innerHTML = newValue;
  });
}
