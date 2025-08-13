let tasks = [];

function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  tasks.push({ text: taskText, completed: false });
  input.value = "";
  renderTasks();
  updateProgress();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  updateProgress();
}

function editTask(index) {
  const newText = prompt("Editar tarea:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
    updateProgress();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
  updateProgress();
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item";

    // Checkbox izquierda
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTask(index);

    // Texto centrado
    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";
    if (task.completed) {
      span.style.textDecoration = "line-through";
      span.style.color = "#888";
    }

    // Botones derecha
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTask(index);

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);
  });
}

function updateProgress() {
  const completed = tasks.filter(task => task.completed).length;
  const total = tasks.length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  document.getElementById("progress").textContent = progress + "%";
  document.getElementById("progress-fill").style.width = progress + "%";
}

document.getElementById("task-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function resetTasks() {
  tasks = [];
  renderTasks();
  updateProgress();
}




