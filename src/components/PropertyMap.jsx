// src/components/PropertyMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ إصلاح الأيقونات في Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function PropertyMap({ coords, title }) {
  if (!coords || coords.length !== 2) return null;

  const mapKey = `${coords[0]}-${coords[1]}-${title}`;

  return (
    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md border border-emerald-200/50 bg-emerald-50">
      <MapContainer
        key={mapKey}           // ✅ يضمن Remount نظيف لأي تغيير
        center={coords}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
