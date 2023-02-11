import { addTask } from "./modulos/addTask.js";
import { readTasks } from "./modulos/readTasks.js";

// ejemplo de immediatly invoked function expression IIFE (()=>{})()
( () => {
const btn = document.querySelector('[data-form-btn]');

btn.addEventListener('click', addTask);
readTasks();
}
)();