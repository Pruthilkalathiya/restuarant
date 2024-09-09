document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Display success message
        document.getElementById('booking-message').textContent = 'Your table has been booked! We will contact you soon to confirm.';

        // Reset form fields
        event.target.reset();
    });

    // Initialize Google Maps
    function initMap() {
        const restaurantLocation = { lat: 40.730610, lng: -73.935242 }; // Example coordinates
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: restaurantLocation
        });
        new google.maps.Marker({
            position: restaurantLocation,
            map: map
        });
    }

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
});
