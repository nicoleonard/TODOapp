import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const readTasks = () => {
const list = document.querySelector('[data-list]');
list.innerHTML = "";


    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);

    dates.forEach(date => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));

        tasksList.forEach((task) =>{
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const dif = dateMoment.diff(taskDate);

            if(dif == 0){
                list.appendChild(createTask(task));
            }
        });
    });

}