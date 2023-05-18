function makeAjaxCall() {
  let postid = document.querySelector("#inputid").value || 1;
  let url = `https://jsonplaceholder.typicode.com/posts/${postid}`;

  // requset :: response
  const xhr = new XMLHttpRequest();

  // register the response listener
  xhr.onload = function () {
    console.log(typeof xhr.response);
    console.log(xhr.response);

    let obj = JSON.parse(xhr.response);
    console.log(obj);

    // DOM OPERATION
    let parentTag = document.querySelector("#parent");
    let newValue = `<h1>${obj.title}</h1>`;
    parentTag.innerHTML = newValue;
  };

  xhr.open("GET", url);
  xhr.send();
}
