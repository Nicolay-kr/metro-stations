const HUMAN_POSITION = { lat: 53.894877, lng: 27.555643 };
const HUMAN_ICON = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2238%22%20viewBox%3D%220%200%2023%2038%22%3E%0A%3Cpath%20d%3D%22M16.6%2C38.1h-5.5l-0.2-2.9-0.2%2C2.9h-5.5L5%2C25.3l-0.8%2C2a1.53%2C1.53%2C0%2C0%2C1-1.9.9l-1.2-.4a1.58%2C1.58%2C0%2C0%2C1-1-1.9v-0.1c0.3-.9%2C3.1-11.2%2C3.1-11.2a2.66%2C2.66%2C0%2C0%2C1%2C2.3-2l0.6-.5a6.93%2C6.93%2C0%2C0%2C1%2C4.7-12%2C6.8%2C6.8%2C0%2C0%2C1%2C4.9%2C2%2C7%2C7%2C0%2C0%2C1%2C2%2C4.9%2C6.65%2C6.65%2C0%2C0%2C1-2.2%2C5l0.7%2C0.5a2.78%2C2.78%2C0%2C0%2C1%2C2.4%2C2s2.9%2C11.2%2C2.9%2C11.3a1.53%2C1.53%2C0%2C0%2C1-.9%2C1.9l-1.3.4a1.63%2C1.63%2C0%2C0%2C1-1.9-.9l-0.7-1.8-0.1%2C12.7h0Zm-3.6-2h1.7L14.9%2C20.3l1.9-.3%2C2.4%2C6.3%2C0.3-.1c-0.2-.8-0.8-3.2-2.8-10.9a0.63%2C0.63%2C0%2C0%2C0-.6-0.5h-0.6l-1.1-.9h-1.9l-0.3-2a4.83%2C4.83%2C0%2C0%2C0%2C3.5-4.7A4.78%2C4.78%200%200%2C0%2011%202.3H10.8a4.9%2C4.9%2C0%2C0%2C0-1.4%2C9.6l-0.3%2C2h-1.9l-1%2C.9h-0.6a0.74%2C0.74%2C0%2C0%2C0-.6.5c-2%2C7.5-2.7%2C10-3%2C10.9l0.3%2C0.1%2C2.5-6.3%2C1.9%2C0.3%2C0.2%2C15.8h1.6l0.6-8.4a1.52%2C1.52%2C0%2C0%2C1%2C1.5-1.4%2C1.5%2C1.5%2C0%2C0%2C1%2C1.5%2C1.4l0.9%2C8.4h0Zm-10.9-9.6h0Zm17.5-.1h0Z%22%20style%3D%22fill%3A%23333%3Bopacity%3A0.7%3Bisolation%3Aisolate%22%2F%3E%0A%3Cpath%20d%3D%22M5.9%2C13.6l1.1-.9h7.8l1.2%2C0.9%22%20style%3D%22fill%3A%23ce592c%22%2F%3E%0A%3Cellipse%20cx%3D%2210.9%22%20cy%3D%2213.1%22%20rx%3D%222.7%22%20ry%3D%220.3%22%20style%3D%22fill%3A%23ce592c%3Bopacity%3A0.5%3Bisolation%3Aisolate%22%2F%3E%0A%3Cpath%20d%3D%22M20.6%2C26.1l-2.9-11.3a1.71%2C1.71%2C0%2C0%2C0-1.6-1.2H5.7a1.69%2C1.69%2C0%2C0%2C0-1.5%2C1.3l-3.1%2C11.3a0.61%2C0.61%2C0%2C0%2C0%2C.3.7l1.1%2C0.4a0.61%2C0.61%2C0%2C0%2C0%2C.7-0.3l2.7-6.7%2C0.2%2C16.8h3.6l0.6-9.3a0.47%2C0.47%2C0%2C0%2C1%2C.44-0.5h0.06c0.4%2C0%2C.4.2%2C0.5%2C0.5l0.6%2C9.3h3.6L15.7%2C20.3l2.5%2C6.6a0.52%2C0.52%2C0%2C0%2C0%2C.66.31h0l1.2-.4a0.57%2C0.57%2C0%2C0%2C0%2C.5-0.7h0Z%22%20style%3D%22fill%3A%23fdbf2d%22%2F%3E%0A%3Cpath%20d%3D%22M7%2C13.6l3.9%2C6.7%2C3.9-6.7%22%20style%3D%22fill%3A%23cf572e%3Bopacity%3A0.6%3Bisolation%3Aisolate%22%2F%3E%0A%3Ccircle%20cx%3D%2210.9%22%20cy%3D%227%22%20r%3D%225.9%22%20style%3D%22fill%3A%23fdbf2d%22%2F%3E%0A%3C%2Fsvg%3E%0A';
const MINSK_CENTER_POSITION = { lat: 53.900616, lng: 27.559017 };

let mapOptions = {zoom: 14, center: HUMAN_POSITION };
let pervomayskaya = {lat: 53.893818, lng:27.570962};
let nemiga = {lat: 53.905947, lng: 27.554066};
let frunzenscaya = {lat: 53.905225, lng: 27.539205};
let lenina = {lat: 53.892892, lng: 27.547887};
let oktyaborskaya = {lat: 53.902131, lng: 27.562246};
let pobedi = {lat: 53.909543, lng: 27.576308};

let select = document.getElementById('station-selector');
let route = document.getElementById('show-route');

function initMap() {
    
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
    let map = new google.maps.Map(
        document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
    
    let human = new google.maps.Marker({
        position: HUMAN_POSITION,
        animation: google.maps.Animation.DROP,
        map: map,
        icon: HUMAN_ICON,
        title: 'It is you',
    });
    
    let pervomayskaya_marker = new google.maps.Marker({
        position: pervomayskaya,
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Первомайская',
    });

    let nemiga_marker = new google.maps.Marker({
        position: nemiga,
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Немига',
    });
    
    let frunzenscaya_marker = new google.maps.Marker({
        position: frunzenscaya,
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Фрунзенская',
    });  
    let lenina_marker = new google.maps.Marker({
        position: lenina,
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Площадь Ленина',
    });
    let oktyaborskaya_marker = new google.maps.Marker({
        position: oktyaborskaya,
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Октяборьская',
    });    
    let pobedi_marker = new google.maps.Marker({
        position: pobedi,
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Площадь победы',
    });  
    let markers = [pervomayskaya_marker,nemiga_marker,frunzenscaya_marker,
        lenina_marker,oktyaborskaya_marker,pobedi_marker
    ]  

    // add animation for marker when it choose

    select.addEventListener('change', function () {
        map.setCenter(eval(select.value)); 
        eval(select.value + '_marker').setAnimation(google.maps.Animation.BOUNCE);
        let stop_animation = function(){
            return eval(select.value + '_marker').setAnimation(null)
        }
        setTimeout(stop_animation,500)
    });

    let route = document.getElementById('show-route');

    // build route from human to station when button was click 

    route.addEventListener('click', function () {
        console.log(select.value);
        directionsService.route(
            {
              origin: HUMAN_POSITION,
              destination: eval(select.value),
              travelMode: 'WALKING',
            }, function(response, status) {
                if (status == "OK") {
                  directionsRenderer.setDirections(response);
                } else {
                  window.alert("Directions request failed due to " + status);
                }
              })
    });

    // build route from human to station when marker was click

    let clickmark = function(mark){
        mark.addListener('click', function() {
            directionsService.route(
                {
                  origin: HUMAN_POSITION,
                  destination: mark.getPosition(),
                  travelMode: 'WALKING',
                }, function(response, status) {
                    if (status == "OK") {
                      directionsRenderer.setDirections(response);
                    } else {
                      window.alert("Directions request failed due to " + status);
                    }
                  })
        });
    }
    for (i = 0; i < markers.length; i++){
        clickmark(markers[i])
    };
}