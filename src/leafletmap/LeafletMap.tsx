import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "./../assets/googleMapIcon.png";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./LeafletMap.scss"
const position = [18.505005639065775, 73.82165950944155]; // Latitude, Longitude

const LeafletMap = () => {
  const myIcon = L.icon({
    iconUrl: markerIconPng,
    iconSize: [35, 38],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],

  });

  return (
    <MapContainer className="leaflet-map-section" center={position} zoom={13} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={myIcon}>
        <Popup>Kalpantar</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;