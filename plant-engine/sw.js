const CACHE='plant-engine-v0.5.0';
const ASSETS=['./','./index.html','./styles.css?v=0.5.0','./plant-candidates.js?v=0.5.0','./app.js?v=0.5.0','./manifest.webmanifest?v=0.5.0','./icons/icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request))));
