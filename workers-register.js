if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/dist/serviceWorker.js") // Ruta del archivo serviceWorker
      .then(() => console.log("Service Worker registrado correctamente."))
      .catch((error) =>
        console.error("Error al registrar el Service Worker:", error)
      );
  } else {
    console.log("Service Worker no soportado en este navegador.");
  }
  