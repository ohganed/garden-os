const CACHE='garden-os-v0.9';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./v09_patch.js'])))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(async r=>{
      const html=await r.text();
      const patched=html.replace('</body>','<script src="./v09_patch.js?v=09"></script></body>');
      return new Response(patched,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});