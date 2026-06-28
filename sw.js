// ── Service Worker BoloBand – Sin caché, siempre actualizado ──
self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Siempre va a la red, nunca usa caché
self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});
