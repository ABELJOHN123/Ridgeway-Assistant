import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = {
  "Gate 3": [10.0, 76.3],
  "Block C": [10.002, 76.305],
  "Storage Yard C": [10.001, 76.304]
};

const MapView = ({ observations }) => {
  let droneLocation = null;

  // detect drone usage
  observations.forEach(obs => {
    if (obs.tool === "simulateDrone") {
      droneLocation = locations[obs.result.location];
    }
  });

  return (
    <div style={{ height: "300px", marginTop: "20px" }}>
      <MapContainer center={[10.0, 76.3]} zoom={15} style={{ height: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Object.entries(locations).map(([name, coords], i) => (
          <Marker key={i} position={coords}>
            <Popup>{name}</Popup>
          </Marker>
        ))}

        {/* Drone highlight */}
        {droneLocation && (
          <Circle
            center={droneLocation}
            radius={100}
            pathOptions={{ color: "red" }}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;