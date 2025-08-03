let form = document.querySelector("#user-form");
let username = document.querySelector("#username");
let roll = document.querySelector("#roll");
let description = document.querySelector("#description");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      id: Date.now(), 
      username: username.value,
      roll: roll.value,
      description: description.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },
  removeUser: function (id) {

    this.users = this.users.filter(user => user.id !== id);
    this.renderUi();
  },
  renderUi: function () {
    let usersList = document.querySelector("#usercard");
    usersList.innerHTML = ""; 

    this.users.forEach((user) => {
      let userDiv = document.createElement("div");
      userDiv.classList.add(
        "bg-gray-900",
        "text-white",
        "p-2",
        "rounded-xl",
        "shadow",
        "w-[200px]",
        "transition-transform",
        "hover:scale-105",
        "flex",
        "flex-col",
        "items-center"
      );
      userDiv.innerHTML = `
        <h2 class="font-bold text-xl mb-2 text-center">${user.username}</h2>
        <p class="text-sm mb-1">Roll: ${user.roll}</p>
        <p class="text-xs mb-2 text-center">${user.description}</p>
        <img src="${user.photo}" alt="${user.username}'s photo" class="w-full h-[200px] rounded-full mb-2">
        <button onclick="userManager.removeUser(${user.id})"
          class="bg-red-500 hover:bg-red-700 text-white text-xs font-semibold py-1 px-2 rounded">
          Delete
        </button>
      `;
      usersList.appendChild(userDiv);
    });
  }
};

userManager.init();
