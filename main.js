let tasks = [];

    function renderTasks() {
      const taskList = document.getElementById("task-list");
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const taskEl = document.createElement("div");
        taskEl.className = `task ${task.completed ? "completed" : ""}`;
        taskEl.innerHTML = `
          <span>${task.text}</span>
          <div class="checkmark ${task.completed ? "checked" : ""}" onclick="toggleTask(${index})">✓</div>
        `;
        taskList.appendChild(taskEl);
      });
      updateProgress();
    }

    function addTask() {
      const input = document.getElementById("task-input");
      if (input.value.trim() === "") return;
      tasks.push({ text: input.value, completed: false });
      input.value = "";
      renderTasks();
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }

    function updateProgress() {
      const completed = tasks.filter(task => task.completed).length;
      const progress = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;
      document.getElementById("progress").textContent = progress + "%";
    }

    function clearTasks() {
      tasks = [];
      renderTasks();
    }

    // Permitir añadir con Enter
    document.getElementById("task-input").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addTask();
      }
    });

    renderTasks();


