const inputText = document.getElementById("input-text");
const dailyTask = document.getElementById("daily-tasks");
const addBtn = document.getElementById("add-btn");
function clickHandler() {
  if (inputText.value === "") {
    alert("Task cannot be empty");
  } else {
    // dailyTask.innerText += inputText.value;
    dailyTask.innerHTML += `
                  <div class="task">
                  <span>${inputText.value}</span> 
                  <i class="material-icons" onclick="handleDelete(event)">delete</i>
                  <button class="donebtn" onclick="handleDone(event)">Done</button>
                  </div>
                  `;
  }
  inputText.value = "";
}
addBtn.addEventListener("click", clickHandler);

function handleDone(e) {
  const parent = e.target.closest(".task");
  const targetSpan = parent.getElementsByTagName("span")[0];
  targetSpan.classList.add("done");
}
function handleDelete(e) {
  const parent = e.target.closest(".task");
  parent.classList.add("deleted");
}
