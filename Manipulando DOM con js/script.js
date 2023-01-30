// immediatly invoked function expression IIFE (()=>{})()
( () => {
const btn = document.querySelector('[data-form-btn]');

const createTask = (btnEvent) => {
  btnEvent.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  input.value='';
  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add('card');
  const taskContent = document.createElement('div');
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement('span');
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);
  task.appendChild(taskContent);
  list.appendChild(task);
};

btn.addEventListener('click', createTask);

//Arrow functions o funciones anonimas
const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add("far","fa-check-square","icon");
  i.addEventListener("click", completeTask);
  return i;
}

const completeTask = (checkEvent) => {
  const element = checkEvent.target;
  element.classList.toggle('fas');
  element.classList.toggle('far');
  element.classList.toggle('completeIcon');
}

}
) ();