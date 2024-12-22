document.getElementById("taskList").addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
      event.target.parentElement.remove();
      console.log("Task Deleted");
    } else if (event.target.classList.contains("complete")) {
      event.target.parentElement.style.textDecoration = "line-through";
      console.log("Task Marked as Completed");
    }
  });

  function addTask() {
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      Task ${taskList.children.length + 1}
      <button class="delete">Delete</button>
      <button class="complete">Mark as Completed</button>
    `;
    taskList.appendChild(newTask);
  }