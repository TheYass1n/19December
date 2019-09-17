


 // Service worker for Progressive Web App
 if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js?v3', {
        scope: '.' // THIS IS REQUIRED FOR RUNNING A PROGRESSIVE WEB APP FROM A NON_ROOT PATH
    }).then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}

/*/add sw
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
    .then((reg) => {
    console.log('Service worker registered.', reg);
  });
});
}*/

