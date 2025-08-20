function actualizarProgreso(grupo) {
      const lista = document.querySelectorAll(`#lista${grupo} .chk`);
      const total = lista.length;
      const checked = [...lista].filter(c => c.checked).length;
      const porcentaje = total > 0 ? Math.round((checked / total) * 100) : 0;
      document.getElementById(`progress${grupo}`).textContent = porcentaje + "%";
      document.getElementById(`bar${grupo}`).style.width = porcentaje + "%";
    }

    // Agregar tarea
    function agregarTarea(grupo) {
      const input = document.getElementById(`nueva${grupo}`);
      if (input.value.trim() === "") return;
      
      const div = document.createElement("div");
      div.className = "task-card";
      div.innerHTML = `
        <div>
          <input type="checkbox" class="chk"> ${input.value}
        </div>
        <div class="actions">
          <button class="btn btn-sm btn-warning editar">✏️</button>
          <button class="btn btn-sm btn-danger eliminar">🗑️</button>
        </div>
      `;
      document.getElementById(`lista${grupo}`).appendChild(div);
      input.value = "";
      agregarEventos(div, grupo);
      actualizarProgreso(grupo);
    }

    // Reset tareas completadas
    function resetTareas(grupo) {
      const lista = document.querySelectorAll(`#lista${grupo} .chk`);
      lista.forEach(c => {
        if (c.checked) c.closest(".task-card").remove();
      });
      actualizarProgreso(grupo);
    }

    // Eventos de cada tarea
    function agregarEventos(div, grupo) {
      div.querySelector(".chk").addEventListener("change", () => actualizarProgreso(grupo));
      div.querySelector(".eliminar").addEventListener("click", () => {
        div.remove();
        actualizarProgreso(grupo);
      });
      div.querySelector(".editar").addEventListener("click", () => {
        const texto = div.querySelector("div").innerText.trim();
        const nuevo = prompt("Editar tarea:", texto);
        if (nuevo) {
          div.querySelector("div").innerHTML = `<input type="checkbox" class="chk"> ${nuevo}`;
          agregarEventos(div, grupo);
        }
      });
    }

function actualizarProgreso(grupo) {
      const lista = document.querySelectorAll(`#lista${grupo} .chk`);
      const total = lista.length;
      const checked = [...lista].filter(c => c.checked).length;
      const porcentaje = total > 0 ? Math.round((checked / total) * 100) : 0;
      document.getElementById(`progress${grupo}`).textContent = porcentaje + "%";
      document.getElementById(`bar${grupo}`).style.width = porcentaje + "%";
    }

    // Agregar tarea
    function agregarTarea(grupo) {
      const input = document.getElementById(`nueva${grupo}`);
      if (input.value.trim() === "") return;
      
      const div = document.createElement("div");
      div.className = "task-card";
      div.innerHTML = `
        <div>
          <input type="checkbox" class="chk"> ${input.value}
        </div>
        <div class="actions">
          <button class="btn btn-sm btn-warning editar">✏️</button>
          <button class="btn btn-sm btn-danger eliminar">🗑️</button>
        </div>
      `;
      document.getElementById(`lista${grupo}`).appendChild(div);
      input.value = "";
      agregarEventos(div, grupo);
      actualizarProgreso(grupo);
    }

    // Reset tareas completadas
    function resetTareas(grupo) {
      const lista = document.querySelectorAll(`#lista${grupo} .chk`);
      lista.forEach(c => {
        if (c.checked) c.closest(".task-card").remove();
      });
      actualizarProgreso(grupo);
    }

    // Eventos de cada tarea
    function agregarEventos(div, grupo) {
      div.querySelector(".chk").addEventListener("change", () => actualizarProgreso(grupo));
      div.querySelector(".eliminar").addEventListener("click", () => {
        div.remove();
        actualizarProgreso(grupo);
      });
      div.querySelector(".editar").addEventListener("click", () => {
        const texto = div.querySelector("div").innerText.trim();
        const nuevo = prompt("Editar tarea:", texto);
        if (nuevo) {
          div.querySelector("div").innerHTML = `<input type="checkbox" class="chk"> ${nuevo}`;
          agregarEventos(div, grupo);
        }
      });
    }

    // Inicializar eventos en las tareas ya existentes
    document.querySelectorAll(".task-card").forEach(div => {
      const grupo = div.closest(".col-md-6").querySelector("h4").textContent.includes("Casa") ? "Casa" : "Trabajo";
      agregarEventos(div, grupo);
    });