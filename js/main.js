import { USERS } from "../db/server.js";
const btnOpen = document.querySelector(".btn__open");
const btnClose = document.querySelector(".btn__close");
const popap = document.querySelector(".popap");

const form__btr = document.querySelector(".form__btr");
// console.log(USERS);
// form start
const form = document.querySelector(".form");
const formName = document.querySelector(".form__name");
const formUsername = document.querySelector(".form__username");
const formPassword = document.querySelector(".form__password");
const formPasswordconform = document.querySelector(".form__password-conform");
// form and
// card start
const wrapper = document.querySelector(".wrapper");
const eyePassword = document.querySelector(".eye__password");
const eyeConform = document.querySelector(".eye__conform");
// card and
const login = document.querySelector(".login");
const loginName = document.querySelector(".login__name");
const loginUserName = document.querySelector(".login__username");
//  console.log(loginUserName);
login.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginame = loginName.value;
  let loginusername = loginUserName.value;
  let name = formName.value;
  let username = formUsername.value;
  if (loginusername !== username) {
    return alert("Bir xilmas");
  }
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = formName.value;
  let username = formUsername.value;
  let password = formPassword.value;
  let passwordConform = formPasswordconform.value;
  if (password !== passwordConform) {
    formPassword.style.border = "1px solid red";
    formPasswordconform.style.border = "1px solid red";
    return;
  }
  formPassword.style.border = "1px solid #ddd";
  formPasswordconform.style.border = "1px solid #ddd";

  let exisUser = USERS.findIndex((user) => user.username === username);
  console.log(exisUser);
  if (exisUser >= 0) {
    formUsername.style.border = "1px solid red";
    return alert("Bu username yaroqsiz");
  }
  let mewUser = {
    id: new Date().getTime(),
    name,
    username,
    password,
  };
  USERS.push(mewUser);
  console.log(USERS);
  form.reset();
  popupState("none");
  createCard(USERS);
});
eyePassword.addEventListener("click", () => {
  if (formPassword.type === "text") {
    formPassword.type = "password";
  } else {
    formPassword.type = "text";
  }
});
eyeConform.addEventListener("click", () => {
  if (formPasswordconform.type === "text") {
    formPasswordconform.type = "password";
  } else {
    formPasswordconform.type = "text";
  }
});
formPassword.addEventListener("input", (e) => {
  let val = e.target.value;
  if (val) {
    eyePassword.style.display = "block";
  } else {
    eyePassword.style.display = "none";
  }
});
formPasswordconform.addEventListener("input", (e) => {
  let sum = e.target.value;
  if (sum) {
    eyeConform.style.display = "block";
  } else {
    eyeConform.style.display = "none";
  }
});
function createCard(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
  data.forEach((user) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
         <p class="card__title">User</p>
         <div class="card__cricle"><img src="./image/men.png" alt=""></div>
                <h3 class="card__h3">${user.name}</h3>
                <p>${user.username}</p>
                <p>${user.password}</p>`;
    // console.log(card);
    wrapper.appendChild(card);
  });
}
createCard(USERS);

btnOpen.addEventListener("click", () => {
  popupState("flex");
});

btnClose.addEventListener("click", () => {
  popupState("none");
});

// form.addEventListener("click", ()=>{
//     popap.style.display = "none"
// })
form__btr.addEventListener("click", () => {
  popupState("none");
});
function popupState(state) {
  popap.style.display = state;
}
