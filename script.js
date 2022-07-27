// Declare variable
let todoForm = document.querySelector(".todo_form");
let submitBtn = document.getElementById("addTodo");
let inputData = document.getElementById("inputTodo");
let error = document.getElementById("error");
let listData = document.getElementById("lists");
let messageElement = document.getElementById("message");

// List item add
const createTodo = (todoId, todoValue) => {
  console.log(todoId);
  console.log(todoValue);
  let todoElement = document.createElement("li");
  todoElement.classList.add("li-style");
  todoElement.id = todoId;

  todoElement.innerHTML = `

  <span> ${todoValue} </span>
  <span> <button class="btn" id="deleteButton">
  <i class="fa fa-trash"> </i> 
  </button> 
  </span>

  `;
  let deleteItem = todoElement.querySelector("#deleteButton");
  deleteItem.addEventListener("click", deleteMessage);
  listData.appendChild(todoElement);
};

//show message
let showMessage = (text, status) => {
  messageElement.innerHTML = text;
  messageElement.classList.add(`bg_${status}`);
  setTimeout(() => {
    messageElement.innerHTML = "";
    messageElement.classList.remove(`bg_${status}`);
  }, 1000);
};
//Delete Message
let deleteMessage = (event) => {
  let selectedTodo = event.target.parentElement.parentElement.parentElement;
  //console.log(selectedTodo);
  listData.removeChild(selectedTodo);
  showMessage("Task is deleted", "danger");
};
// Event ADD
let addTodo = (event) => {
  event.preventDefault();

  let todoValue = inputData.value;
  //unique id
  let todoId = Math.random() * 100;

  createTodo(todoId, todoValue);
  showMessage("Task is added", "success");
  console.log(todoId);
  inputData.value = "";
};

todoForm.addEventListener("submit", addTodo);
