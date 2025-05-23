fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("productos");
        data.forEach(p => {
            const div = document.createElement("div");
            div.className = "producto";
            div.innerHTML = `<h2>${p.nombre}</h2><p>${p.precio} COP</p>`;
            container.appendChild(div);
        });
    });