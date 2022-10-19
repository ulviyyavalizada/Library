// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.3979999, lng: 49.8717302 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        icon: "img/map.png",
        map: map,
    });
}