// 1.1
async function fetchRequest(param) {
  try {
    const data = await fetch("https://randomuser.me/api?" + param);
    if (data.ok) {
      return await data.json();
    } else {
      throw new Error("error");
    }
  } catch (error) {
    console.log(error);
  }
}
const button = document.getElementById("buttonOne");
const pName = document.getElementById("name");
const pEmail = document.getElementById("email");
const img = document.getElementsByTagName("img")[0];
const pAge = document.getElementById("age");
button.addEventListener("click", () => {
  fetchRequest().then((data) => {
    pName.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
    pEmail.textContent = data.results[0].email;
    img.src = data.results[0].picture.thumbnail;
    pAge.textContent = data.results[0].registered.age;
  });
});

// 1.2
const buttonTow = document.getElementById("buttonTow");
buttonTow.addEventListener("click", () => {
  fetchRequest("results=5&gender=male").then((data) => console.log(data));
});

// 2
async function RequestJokes() {
  const joke = document.getElementById("joke");
  try {
    const data1 = await fetch(
      "https://api.humorapi.com/jokes/search?api-key=41429990cb2b4ce3a690d1457972f45d"
    );
    if (data1.ok) {
      const finalData = await data1.json();
      joke.textContent = finalData.jokes[0].joke;
    } else {
      throw new Error("error");
    }
  } catch (error) {
    console.log(error);
  }
}
RequestJokes();

// 3
async function RequestProducts() {
  try {
    const data1 = await fetch("https://fakestoreapi.com/products");
    if (data1.ok) {
      return await data1.json();
    } else {
      throw new Error("error");
    }
  } catch (error) {
    console.log(error);
  }
}
const list = document.getElementById("list");
RequestProducts().then((data) => {
  for (const product of data) {
    const rowList = document.createElement("li");
    rowList.textContent = product.title;
    list.append(rowList);
  }
});

// 4
const buttonSend = document.getElementById("send");
buttonSend.addEventListener("click", async () => {
  const details = sendDetails();
  try {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      details
    );
    if (data.ok) {
      const newUser = await data.json();
      console.log(newUser);
    } else {
      throw new Error("error");
    }
  } catch (error) {
    console.log(error);
  }
});

function sendDetails() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const details = {
    method: "post",
    body: JSON.stringify({
      name: {
        firstName: firstName.value,
        lastName: lastName.value,
      },
      email: email.value,
      phone: phone.value,
    }),
  };
  return details;
}
