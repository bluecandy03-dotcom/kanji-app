self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e) {
  if (e.request.url.includes('api.anthropic.com')) return;
  e.respondWith(fetch(e.request));
});
