let PositionInit = L.latLng(-37.89, 175.46);
let tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

const map = L.map('selectMap', {
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
  autoPan: true,
};

map.on('click', function (e) {
  const mc = new L.Marker([e.latlng.lat, e.latlng.lng], markerOptions).addTo(
    map
  );
});
$(document).ready(function () {});
