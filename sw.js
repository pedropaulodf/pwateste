self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/pwateste/',
      '/pwateste/index.html',
      '/pwateste/index.js',
      '/pwateste/style.css',
      '/pwateste/images/fox1.jpg',
      '/pwateste/images/fox2.jpg',
      '/pwateste/images/fox3.jpg',
      '/pwateste/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
