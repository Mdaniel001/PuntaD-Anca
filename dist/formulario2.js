document.getElementById("form2").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener valores
  const name = document.getElementById("name").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const special = document.getElementById("special").value.trim();

  // Validar campos obligatorios
  if (!name || !lastName || !phone || !email) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{7,15}$/;

  if (!emailRegex.test(email)) {
    alert("Correo electrónico inválido.");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Teléfono inválido.");
    return;
  }

  // Guardar datos en localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("phone", phone);
  localStorage.setItem("email", email);
  localStorage.setItem("special", special);

  // Redirigir al formulario 3
  window.location.href = "formulario3.html";
});
