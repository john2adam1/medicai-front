self.addEventListener('install', (e) => {
    // Skip the waiting lifecycle to become active immediately
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    // Claim control of all active clients immediately
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
    // A minimum fetch handler is required by Chrome to trigger the "Add to Home Screen" prompt
    e.respondWith(fetch(e.request).catch(() => new Response("Offline")));
});
