async function createUser() {
  let url = "http://localhost:4000/user/";

  let data = {
    username: "mumbai",
    password: "12345",
    email: "mi@adsf.ocm",
    mobile: "212121",
  };

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
