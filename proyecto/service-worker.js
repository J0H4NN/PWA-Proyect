const CACHE_NAME = 'portafolio-cache-v1.3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  './css/style.css',
  './css/fuentes/Splatch.ttf',
  './css/fuentes/CHICKEN_Pie.ttf',
  './js/Ilus_Script.js',
  './img/3D-1.png',
  './img/3D.png',
  './img/anima.png',
  './img/banner.png',
  './img/Blender.png',
  './img/blender.svg',
  './img/CapCut.png',
  './img/ClipStudio.png',
  './img/filmora.png',
  './img/foto p.jpeg',
  './img/game.png',
  './img/icon-192x192.png',
  './img/icon-512x512.png',
  './img/icon.jpeg',
  './img/krizilla.png',
  './img/QR.png',
  './img/animaciones/alma de felpa final.mp4',
  './img/animaciones/Copia de presentacion.mp4',
  './img/animaciones/Ecos del Ayer.mp4',
  './img/animaciones/Examebn.mp4',
  './img/ilustraciones/Avatar ideas.png',
  './img/ilustraciones/Charro negro.png',
  './img/ilustraciones/d1.jpg',
  './img/ilustraciones/d2.jpg',
  './img/ilustraciones/Dia 1.jpg',
  './img/ilustraciones/Dia 3.jpg',
  './img/ilustraciones/dia 5.png',
  './img/ilustraciones/dino.jpg',
  './img/ilustraciones/graduacion.png',
  './img/ilustraciones/Invincible.png',
  './img/ilustraciones/jigsaw.jpg',
  './img/ilustraciones/lumity.jpg',
  './img/ilustraciones/pj.png',
  './img/ilustraciones/shen.png',
  './img/modelos 3D/1.png',
  './img/modelos 3D/10.png',
  './img/modelos 3D/2.png',
  './img/modelos 3D/3.png',
  './img/modelos 3D/4.png',
  './img/modelos 3D/5.png',
  './img/modelos 3D/6.png',
  './img/modelos 3D/7.png',
  './img/modelos 3D/8.png',
  './img/modelos 3D/9.png',
  './img/videojuegos/enemigo.png',
  './img/videojuegos/Julian.png',
  './img/videojuegos/machete gameplay.mp4',
  './img/videojuegos/machete1.png'
 
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); 
          }
        })
      );
    })
  );
});
