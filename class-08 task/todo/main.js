const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(taskInput.value);

  addTask(taskInput.value);
});

const addTask = (task) => {
  const li = document.createElement("li");

  const textDiv = document.createElement("div");

  textDiv.textContent = task;

  li.appendChild(textDiv);

  const actionDiv = document.createElement("div");
  actionDiv.classList.add("task-actions");
  li.appendChild(actionDiv);

  // now place a delete button with its own event listener
  // Delete-btn
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });
  actionDiv.appendChild(deleteBtn);

  // Edit-btn
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", task);
    if (newTask !== null) {
      li.firstChild.textContent = newTask;
    }
  });
  actionDiv.appendChild(editBtn);

  // Complete-btn
  const completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";

  completeCheckbox.addEventListener("change", () => {
    if (completeCheckbox.checked) {
      li.firstChild.classList.add("completed");
    } else {
      li.firstChild.classList.remove("completed");
    }
  });

  actionDiv.appendChild(completeCheckbox);

  taskList.appendChild(li);
};
