async function createUser() {
  let url = "http://localhost:4000/user/";

  let usernameTag = document.querySelector("#user_id");
  let passwordTag = document.querySelector("#password_id");
  let emailTag = document.querySelector("#email_id");
  let mobileTag = document.querySelector("#mobile_id");

  let data = {
    username: usernameTag.value,
    password: passwordTag.value,
    email: emailTag.value,
    mobile: mobileTag.value,
  };

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  usernameTag.value = "";
  passwordTag.value = "";
  emailTag.value = "";
  mobileTag.value = "";
  alert("User Added");
}
