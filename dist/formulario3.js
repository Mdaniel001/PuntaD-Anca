document.addEventListener("DOMContentLoaded", function () {
  // Inicializar EmailJS con tu clave pública
  emailjs.init("5AP2aXK5E3t0nkpe3"); // Reemplaza con tu clave pública de EmailJS

  document.getElementById("sendEmails").addEventListener("click", function () {
    // Recuperar datos desde localStorage
    const groupSize = localStorage.getItem("groupSize");
    const date = localStorage.getItem("date");
    const time = localStorage.getItem("time");
    const name = localStorage.getItem("name");
    const lastName = localStorage.getItem("lastName");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");
    const special = localStorage.getItem("special");

    // Validar datos antes de enviar
    if (!groupSize || !date || !time || !name || !lastName || !phone || !email) {
      alert("Por favor, completa todos los campos antes de enviar la confirmación.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("El correo electrónico proporcionado no es válido.");
      return;
    }

    // Mostrar datos para depuración
    console.log("Enviando datos:", {
      groupSize,
      date,
      time,
      name,
      lastName,
      phone,
      email,
      special,
    });

    // Enviar correo usando EmailJS
    emailjs
      .send("service_xawfxba", "template_ei4i0hi", {
        to_email: email, // Correo del cliente
        owner_email: "melkisls.big@gmail.com", // Correo del dueño
        groupSize,
        date,
        time,
        name,
        lastName,
        phone,
        special,
      })
      .then(() => {
        alert("¡Correo de confirmación enviado correctamente!");
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        alert(`Error al enviar el correo: ${error.text || "Revisa la configuración."}`);
      });
  });
});
