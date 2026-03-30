self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./phonetics.js",
        "./grammar.js"
      ]);
    })
  );
});