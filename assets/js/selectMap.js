let PositionInit = L.latLng(-37.89, 175.46);
let tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

var mapPreview = L.map('mapPreview', {
  center: PositionInit,
  zoom: 13,
  layers: [tiles],
  zoomControl: false,
});

setTimeout(function () {
  mapPreview.invalidateSize();
}, 250);

$(document).ready(function () {
  //Revalidate Map Size when modal show
  let selectedPoint;
  $('#modalSelectMap').on('show.bs.modal', function () {
    mapPreview.remove();
    const selectMap = L.map('selectMap', {
      center: PositionInit,
      zoomControl: false,
      zoom: 13,
      layers: [tiles],
    });

    var iconOptions = {
      iconUrl: './assets/img/marker-select.svg',
      iconSize: [51, 68],
    };

    var markerIcon = L.icon(iconOptions);
    var markerOptions = {
      icon: markerIcon,
      draggable: true,
    };

    selectMap.on('click', function (e) {
      var myPositionMarker = new L.Marker(
        [e.latlng.lat, e.latlng.lng],
        markerOptions
      ).addTo(selectMap);
      const latitudePosition = e.latlng.lat;
      const longitudePosition = e.latlng.lng;
      selectedPoint = [latitudePosition, longitudePosition];
      console.log(`Latitude Position ${latitudePosition}`);
      console.log(`Longitude Position ${longitudePosition}`);
    });
    setTimeout(function () {
      selectMap.invalidateSize();
    }, 250);
  });

  $('#buttonConfirm').click(function () {
    selectMap.remove();

    var mapPreview = L.map('mapPreview', {
      center: PositionInit,
      zoom: 13,
      layers: [tiles],
      zoomControl: false,
    });
    setTimeout(function () {
      mapPreview.invalidateSize();
    }, 1000);
  });
});
