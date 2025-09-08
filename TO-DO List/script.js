const task = document.querySelector("#task");
const taskList = document.querySelector("ul");
task.focus();



function addTask() {
    if (task.value == '')
        alert("Enter a task");
    else {
        let li = document.createElement("li");
        li.innerHTML = task.value.toUpperCase();
        taskList.appendChild(li);
        task.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
}

task.addEventListener("keypress",(e)=>{
    if(e.key === "Enter")
        addTask();
})

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    addTask();
})

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI")
        e.target.classList.toggle("check");
    else if (e.target.tagName === "SPAN")
        e.target.parentElement.remove();
    saveData();
})

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}
function showData() {
    taskList.innerHTML = localStorage.getItem("data");

}
showData();