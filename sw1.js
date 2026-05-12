self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.message,
        icon: 'icon.png', // Replace with your icon if you have one
        badge: 'icon.png'
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
});
