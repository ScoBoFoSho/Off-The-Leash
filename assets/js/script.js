// Map Object created!
const parkMap = L.map("parkMap").setView([0, 0], 1);

const attribution =
  "&coppy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.add(parkMap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
