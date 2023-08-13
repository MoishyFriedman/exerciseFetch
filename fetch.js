// 1.1
async function fetchRequest() {
  try {
    const data = await fetch("https://randomuser.me/api");
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
    pName.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;
    pEmail.innerText = data.results[0].email;
    img.src = data.results[0].picture.thumbnail;
    pAge.innerText = data.results[0].registered.age;
  });
});

// 1.2
const buttonTow = document.getElementById("buttonTow");
buttonTow.addEventListener("click", () => {
  fetchRequest().then((data) => {
    let i = 5;
    while (i > 0) {
      if (data.results[0].gender === "male") {
        console.log(data);
      }
      i++;
    }
  });
});
