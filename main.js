

Notification.requestPermission(
  function(status){
    console.log('Notification permission status:' , status);
  }
  
);
function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'Here is a notification body!',
        icon: 'assets/icon.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      reg.showNotification('Hello world!', options);
    });
  }
}


document.addEventListener('click', function (event) {
	if (!event.target.matches('#demo')) return;
      displayNotification();
    console.log(event.target);

}, false);
