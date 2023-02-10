import checkComplete from "./modulos/checkComplete.js";
import deleteIcon from "./modulos/deleteIcon.js";

// ejemplo de immediatly invoked function expression IIFE (()=>{})()
( () => {
const btn = document.querySelector('[data-form-btn]');

const addTask = (evento) => {
  const list = document.querySelector('[data-list]');
  const task = createTask(evento);
  list.appendChild(task);
}

const createTask = (event) => {
  event.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');

  input.value=''; //backticks ´´

  const task = document.createElement('li');
  task.classList.add('card');
  const taskContent = document.createElement('div');
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement('span');
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());

};

btn.addEventListener('click', addTask);
}
)();