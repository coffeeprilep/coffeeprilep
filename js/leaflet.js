var map = L.map('map').setView([41.3408, 21.5544], 13); // Set the view to Prilep with a zoom level of 13

// Add OpenStreetMap tile layer (background map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a point (marker) at the given coordinates
var marker = L.marker([41.3408, 21.5544]).addTo(map); // Add marker to Prilep
marker.bindPopup("<b>Prilep</b><br>This is the city of Prilep."); // Optional: Popup text when clicking the marker
