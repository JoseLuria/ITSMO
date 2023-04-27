let map;

function initMap() {
  const mapElement = document.querySelector("#map");

  const mapOptions = {
    center: { lat: 18.090042, lng: -95.654058 },
    zoom: 7,
  };

  const directionRequest = {
    origin: "Salina Cruz, Oaxaca",
    destination: "Coatzacoalcos, Veracruz",
    travelMode: google.maps.TravelMode.DRIVING,
  };

  const validStatus = "OK";

  const markers = [
    {
      markerData: {
        position: { lat: 16.168776, lng: -95.198727 },
        map: map,
        title: "Salina Cruz",
      },
      infoWindow: {
        content:
          "<h3>Salina Cruz</h3><p>Punto de origen del corredor interoceánico</p>",
      },
    },
    {
      markerData: {
        position: { lat: 18.142986, lng: -94.479976 },
        map: map,
        title: "Coatzacoalcos",
      },
      infoWindow: {
        content:
          "<h3>Coatzacoalcos</h3><p>Punto de destino del corredor interoceánico</p>",
      },
    },
  ];

  map = new google.maps.Map(mapElement, mapOptions);

  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();

  directionsRenderer.setMap(map);
  directionsRenderer.setPanel(document.getElementById("directions-panel"));

  directionsService.route(directionRequest, (result, status) => {
    if (status === validStatus) {
      directionsRenderer.setDirections(result);
    }
  });

  markers.forEach(({ markerData, infoContent }) => {
    const marker = new google.maps.Marker(markerData);
    const infoWindow = new google.maps.InfoWindow(infoContent);
    marker.addListener("click", () => infoWindow.open(map, marker));
  });
}
