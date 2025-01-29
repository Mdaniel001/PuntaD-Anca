const CACHE_NAME = "reserva-puntadanca-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/dist/formulario1.js",
  "/dist/formulario2.js",
  "/imagenes/maps.png",
  "/imagenes/logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
