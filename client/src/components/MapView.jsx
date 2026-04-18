import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = {
  "Gate 3": [10.0, 76.3],
  "Block C": [10.002, 76.305],
  "Storage Yard": [10.001, 76.304],
};

const MapView = () => {
  return (
    <div className="h-72 rounded-xl overflow-hidden">
      <MapContainer center={[10.0, 76.3]} zoom={15} className="h-full w-full">

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Object.entries(locations).map(([name, pos], i) => (
          <Marker key={i} position={pos}>
            <Popup>{name}</Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  );
};

export default MapView;