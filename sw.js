self.addEventListener('install', function(e){
  e.waitUntil;
    caches.open('data').then(function(cache){
      return cache.addAll([
        'main.js',
        'index.html',
        'icon.png'
      ])
    })
});

self.addEventListener('fetch', function(e){
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
  )
})