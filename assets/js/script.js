// Map Object created!
var parkMap = L.map("parkMap").setView([38.18, -95.34], 4);
// uses css link to add sytled tiles to object named "parkMap"
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 16,
  attribution: "© OpenStreetMap",
}).addTo(parkMap);

