let map;

//Mapa

let urlAguacate = "/img/aguacate.png";
let urlFrijol = "/img/frijol.png";
let urlLimon = "/img/limon.png";
let urlMaiz = "/img/maiz.png";

function initMap() {
  // Creamos un objeto mapa y especificamos el elemento DOM donde se va a mostrar.
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 18.090042, lng: -95.654058 },
    zoom: 7,
  });

    // Creamos un objeto de renderización de direcciones y especificamos los elementos DOM donde se van a mostrar.
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
  
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("directions-panel"));
  
    // Creamos la solicitud de ruta con los puntos de origen y destino.
    const request = {
      origin: "Salina Cruz, Oaxaca",
      destination: "Coatzacoalcos, Veracruz",
      travelMode: google.maps.TravelMode.DRIVING,
    };
  
    // Enviamos la solicitud de ruta al servicio de direcciones de Google Maps.
    directionsService.route(request, (result, status) => {
      if (status == "OK") {
        // Mostramos la ruta en el mapa y en el panel de direcciones.
        directionsRenderer.setDirections(result);
      }
    });
  
    // Agregamos un marcador en el punto de origen.
    const marker = new google.maps.Marker({
      position: { lat: 16.168776, lng: -95.198727 },
      map: map,
      title: "Salina Cruz",
    });
  
    // Agregamos información adicional al marcador en un cuadro de información (infowindow).
    const infowindow = new google.maps.InfoWindow({
      content: "<h3>Salina Cruz</h3><p>Punto de origen del corredor interoceánico</p>",
    });
  
    // Mostramos el cuadro de información cuando el usuario hace clic en el marcador.
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  
    // Agregamos un marcador en el punto de destino.
    const marker2 = new google.maps.Marker({
      position: { lat: 18.142986, lng: -94.479976 },
      map: map,
      title: "Coatzacoalcos",
    });
  
    // Agregamos información adicional al marcador en un cuadro de información (infowindow).
    const infowindow2 = new google.maps.InfoWindow({
      content: "<h3>Coatzacoalcos</h3><p>Punto de destino del corredor interoceánico</p>",
    });
  
    // Mostramos el cuadro de información cuando el usuario hace clic en el marcador.
    marker2.addListener("click", () => {
      infowindow2.open(map, marker2);
    });

}

function aguacate(map) {
  // Array de objetos con la información de cada marcador de Aguacate
  const markersAguacate = [
    {
      position: { lat: 17.163348535398782, lng: -95.78358019694664 },
      icon: {
        url: urlAguacate,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "San Juan Cotzocon <br> 425.7 ha",
    },
  ];

  mostrarArray(markersAguacate, map);
}

function limon(map) {
  // Array de objetos con la información de cada marcador de Limón
  const markersLimon = [
    {
      position: { lat: 17.96989, lng: -94.92966 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Acayucan, Veracruz <br> 63.00 ha",
    },
    {
      position: { lat: 18.13536, lng: -94.16233 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Agua Dulce, Veracruz <br> 27.54 ha",
    },
    {
      position: { lat: 16.20213, lng: -95.06447 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Chahuites, Oaxaca <br> 17.00 ha",
    },
    {
      position: { lat: 17.10474, lng: -94.65636 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Chinameca, Veracruz <br> 39.50 ha",
    },
    {
      position: { lat: 18.00169, lng: -94.71259 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Cosoleacaque, Veracruz <br> 32.00 ha",
    },
    {
      position: { lat: 16.52093, lng: -95.11659 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "El Espinal, Oaxaca <br> 2.50 ha",
    },
    {
      position: { lat: 18.13222, lng: -95.30861 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Isla, Veracruz <br> 128.00 ha",
    },
    {
      position: { lat: 17.36037, lng: -94.52816 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Ixhuatlán del Sureste, Veracruz <br> 33.00 ha",
    },
    {
      position: { lat: 17.94645, lng: -94.71496 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Jáltipan, Veracruz <br> 28.00 ha",
    },
    {
      position: { lat: 18.11978, lng: -95.22302 },
      icon: {
        url: urlLimon,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Juan Rodríguez Clara, Veracruz <br> 79.00 ha",
    },
  ];

  mostrarArray(markersLimon, map);
}

function maiz(map) {
  // Array de objetos con la información de cada marcador de maiz
  const markersMaiz = [
    {
      position: { lat: 17.95925, lng: -94.91511 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Acayucan <br> 8,489.00 ha",
    },
    {
      position: { lat: 18.15259, lng: -94.05418 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Agua Dulce <br> 1,512.00 ha",
    },
    {
      position: { lat: 18.48408, lng: -95.34217 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Angel R. Cabada <br> 1,509.00 ha",
    },
    {
      position: { lat: 16.55148, lng: -95.11565 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Asunción Ixtaltepec <br> 1,899.00 ha",
    },
    {
      position: { lat: 18.42202, lng: -95.08529 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Catemaco <br> 2,534.00 ha",
    },
    {
      position: { lat: 16.26709, lng: -94.95103 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Chahuites <br> 616.00 ha",
    },
    {
      position: { lat: 18.08035, lng: -94.72738 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Chinameca <br> 1,374.00 ha",
    },
    {
      position: { lat: 16.56949, lng: -95.09497 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Ciudad Ixtepec <br> 1,542.00 ha",
    },
    {
      position: { lat: 18.14129, lng: -94.43956 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Coatzacoalcos <br> 960.00 ha",
    },
    {
      position: { lat: 18.00072, lng: -94.76764 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Cosoleacaque <br> 3,166.47 ha",
    },
    {
      position: { lat: 16.37561, lng: -95.22126 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "El Barrio de la Soledad <br> 1,010.00 ha",
    },
    {
      position: { lat: 16.49062, lng: -95.03534 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "El Espinal <br> 388.25 ha",
    },
    {
      position: { lat: 16.68305, lng: -95.01283 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Guevea de Humboldt <br> 1,049.55 ha",
    },
    {
      position: { lat: 18.13801, lng: -95.01123 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Hueyapan de Ocampo <br> 15,477.00 ha",
    },
    {
      position: { lat: 18.43094, lng: -95.07608 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Isla <br> 8,579.00 ha",
    },
    {
      position: { lat: 17.67367, lng: -94.04544 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Ixhuatlán del Sureste <br> 842.00 ha",
    },
    {
      position: { lat: 17.92178, lng: -94.74631 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Jáltipan <br> 5,331.00 ha",
    },
    {
      position: { lat: 17.86459, lng: -94.71798 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Jesús Carranza <br> 5,496.00 ha",
    },
    {
      position: { lat: 18.04496, lng: -95.2178 },
      icon: {
        url: urlMaiz,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Juan Rodríguez Clara <br> 4,092.00 ha",
    },
  ];

  mostrarArray(markersMaiz, map);
}

function frijol(map) {
  // Array de objetos con la información de cada marcador de Frijol
  const markersFrijol = [
    {
      position: { lat: 17.949871174663777, lng: -94.91533088286519 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Acayucan <br> 290.00 ha",
    },
    {
      position: { lat: 18.139277402621067, lng: -94.14780399049424 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Agua Dulce <br> 59.00 ha",
    },
    {
      position: { lat: 18.424873570374463, lng: -95.0947327941978 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Catemaco <br> 270.00 ha",
    },
    {
      position: { lat: 17.97148148753437, lng: -94.72608579806202 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Chinameca <br> 69.00 ha",
    },
    {
      position: { lat: 18.145973438080265, lng: -94.4612494254635 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Coatzacoalcos <br> 74.00 ha",
    },
    {
      position: { lat: 18.00233572529271, lng: -94.74096609714598 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Cosoleacaque <br> 118.00 ha",
    },
    {
      position: { lat: 16.845870757418413, lng: -95.07329130749722 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Guevea de Humboldt <br> 267.50 ha",
    },
    {
      position: { lat: 17.820499635036166, lng: -94.55679457820309 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Hidalgotitlán <br> 220.00 ha",
    },
    {
      position: { lat: 18.27688900376446, lng: -95.1697655293887 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Hueyapan de Ocampo <br> 982.00 ha",
    },
    {
      position: { lat: 18.108664, lng: -94.640464 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Isla <br> 221.00 ha",
    },
    {
      position: { lat: 17.523743, lng: -94.809587 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Ixhuatlán del Sureste <br> 78.00 ha",
    },
    {
      position: { lat: 17.936338, lng: -94.950004 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Jáltipan <br> 198.00 ha",
    },
    {
      position: { lat: 17.579701, lng: -94.809646 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Jesús Carranza <br> 52.00 ha",
    },
    {
      position: { lat: 18.135984, lng: -95.122911 },
      icon: {
        url: urlFrijol,
        scaledSize: new google.maps.Size(50, 50),
      },
      content: "Juan Rodríguez Clara <br> 179.00 ha",
    },
  ];

  mostrarArray(markersFrijol, map);
}

function mostrarArray(lista, map) {
  // Iterar sobre el array y crear un marcador para cada objeto
  lista.forEach((item) => {
    const marker = new google.maps.Marker({
      position: item.position,
      map: map,
      icon: item.icon,
    });

    const infowindow = new google.maps.InfoWindow({
      content: item.content,
    });

    // Mostrar infoventana al hacer clic en el marcador
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  });
}

//Buscador de cultivo

const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

let siembra = ["Aguacate", "Cacao", "Frijol", "Limón", "Maíz"];

function addCountry(selectedCultivo) {
  options.innerHTML = "";
  siembra.forEach((country) => {
    let isSelected = country == selectedCultivo ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();

function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;

  if (selectedLi.innerText == "Aguacate") {
    aguacate(map);
  }

  if (selectedLi.innerText == "Frijol") {
    frijol(map);
  }

  if (selectedLi.innerText == "Maíz") {
    maiz(map);
  }

  if (selectedLi.innerText == "Limón") {
    limon(map);
  }
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = siembra
    .filter((data) => {
      return data.toLowerCase().startsWith(searchWord);
    })
    .map((data) => {
      let isSelected =
        data == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    })
    .join("");
  options.innerHTML = arr
    ? arr
    : `<p style="margin-top: 10px;">No hay registros</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

function rutaCIIT(){
    // Creamos un objeto de renderización de direcciones y especificamos los elementos DOM donde se van a mostrar.
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
  
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("directions-panel"));
  
    // Creamos la solicitud de ruta con los puntos de origen y destino.
    const request = {
      origin: "Salina Cruz, Oaxaca",
      destination: "Coatzacoalcos, Veracruz",
      travelMode: google.maps.TravelMode.DRIVING,
    };
  
    // Enviamos la solicitud de ruta al servicio de direcciones de Google Maps.
    directionsService.route(request, (result, status) => {
      if (status == "OK") {
        // Mostramos la ruta en el mapa y en el panel de direcciones.
        directionsRenderer.setDirections(result);
      }
    });
  
    // Agregamos un marcador en el punto de origen.
    const marker = new google.maps.Marker({
      position: { lat: 16.168776, lng: -95.198727 },
      map: map,
      title: "Salina Cruz",
    });
  
    // Agregamos información adicional al marcador en un cuadro de información (infowindow).
    const infowindow = new google.maps.InfoWindow({
      content: "<h3>Salina Cruz</h3><p>Punto de origen del corredor interoceánico</p>",
    });
  
    // Mostramos el cuadro de información cuando el usuario hace clic en el marcador.
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  
    // Agregamos un marcador en el punto de destino.
    const marker2 = new google.maps.Marker({
      position: { lat: 18.142986, lng: -94.479976 },
      map: map,
      title: "Coatzacoalcos",
    });
  
    // Agregamos información adicional al marcador en un cuadro de información (infowindow).
    const infowindow2 = new google.maps.InfoWindow({
      content: "<h3>Coatzacoalcos</h3><p>Punto de destino del corredor interoceánico</p>",
    });
  
    // Mostramos el cuadro de información cuando el usuario hace clic en el marcador.
    marker2.addListener("click", () => {
      infowindow2.open(map, marker2);
    });
}