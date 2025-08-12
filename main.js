const mapaEmojis = {
        "comer": "🍽️",
        "correr": "🏃",
        "pasear mascota": "🐕",
        "dormir": "😴",
        "leer": "📚",
        "trabajar": "💻",
        "viajar": "✈️",
        "estudiar": "📖",
        "jugar": "🎮",
        "cocinar": "👩‍🍳"
    };

    function agregarActividad() {
        const input = document.getElementById("actividad");
        const texto = input.value.trim().toLowerCase();
        if (!texto) return;

        const emoji = mapaEmojis[texto] || "❓";
        const lista = document.getElementById("lista-emojis");

        const li = document.createElement("li");
        li.innerHTML = `<span>${emoji}</span> <span style="font-size:1rem;color:#555">${texto}</span>`;

        li.addEventListener('click', () => {
            li.classList.toggle('completada')
        })

        lista.appendChild(li)
        
        input.value = "";
        input.focus();
    }

    // Agregar con Enter
    document.getElementById("actividad").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            agregarActividad();
        }
    });