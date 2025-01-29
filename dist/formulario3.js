document.addEventListener("DOMContentLoaded", function () {


  const detailsContainer = document.getElementById("details");
  if (!detailsContainer) {
    console.error("No se encontró el contenedor para los detalles de la reserva.");
    return;
  }

  // Recuperar datos de la reserva desde localStorage
  const groupSize = localStorage.getItem("groupSize") || "No especificado";
  const date = localStorage.getItem("date") || "No especificada";
  const time = localStorage.getItem("time") || "No especificada";
  const name = localStorage.getItem("name") || "No especificado";
  const lastName = localStorage.getItem("lastName") || "No especificado";
  const special = localStorage.getItem("special") || "Ninguna";

  // Crear contenido HTML con los datos de la reserva
  const reservationDetails = `
    <h2>Detalles de la Reserva:</h2>
    <p><strong>Nombre:</strong> ${name} ${lastName}-- Cantidad de Personas: ${groupSize}</p>    
    <p><strong>Fecha:</strong> ${date} --Hora: ${time}-- Evento especial: ${special}</p>
  
  `; 

  // Insertar el contenido en el contenedor
  detailsContainer.innerHTML = reservationDetails; 


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

  document.getElementById("addToCalendar").addEventListener("click", function () {
    // Recuperar datos desde localStorage
    const date = localStorage.getItem("date");
    const time = localStorage.getItem("time");
    const name = localStorage.getItem("name");

    if (!date || !time || !name) {
      alert("Por favor, asegúrate de que la reserva esté completa antes de agregar al calendario.");
      return;
    }

    // Convertir la fecha y hora al formato requerido
    const startDateTime = new Date(`${date}T${time}`);
    const endDateTime = new Date(startDateTime.getTime() + 2 * 60 * 60 * 1000); // Duración de 2 horas

    const formatDateTime = (date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    // Construir la URL para Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reserva%20en%20Restaurante&dates=${formatDateTime(
      startDateTime
    )}/${formatDateTime(endDateTime)}&details=Reserva%20a%20nombre%20de%20${encodeURIComponent(
      name
    )}&location=Restaurante&trp=false`;

    // Abrir Google Calendar en una nueva pestaña
    window.open(googleCalendarUrl, "_blank");
  });









});
