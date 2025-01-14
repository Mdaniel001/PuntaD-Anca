document.addEventListener("DOMContentLoaded", function () {
    // Inicializar EmailJS con tu clave pública
    emailjs.init("5AP2aXK5E3t0nkpe3"); // Asegúrate de reemplazar YOUR_PUBLIC_KEY con tu clave pública
  
    document.getElementById("sendEmails").addEventListener("click", function () {
      // Configuración de los datos a enviar
      const groupSize = localStorage.getItem("groupSize");
      const date = localStorage.getItem("date");
      const time = localStorage.getItem("time");
      const name = localStorage.getItem("name");
      const lastName = localStorage.getItem("lastName");
      const phone = localStorage.getItem("phone");
      const email = localStorage.getItem("email");
      const special = localStorage.getItem("special");
  
      // Enviar correos
      emailjs
        .send("service_xawfxba", "template_gjqu03u", {
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
        .then(() => alert("Correos enviados correctamente"))
        .catch((error) => alert(`Error al enviar los correos: ${error.text}`));
    });




    
  });
  