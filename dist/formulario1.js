document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores
    const groupSize = document.getElementById("groupSize").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Validar que los campos no estén vacíos
    if (!groupSize || !date || !time) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Validar formato de fecha
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
        alert("Por favor, ingresa una fecha válida en el formato AAAA-MM-DD.");
        return;
    }

    // Guardar datos en localStorage
    localStorage.setItem("groupSize", groupSize);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

    // Redirigir al formulario 2
    window.location.href = "../pages/Formulario2.html";
});
