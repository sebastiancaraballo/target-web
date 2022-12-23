import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

const coords = [48.86064459848621, 2.337641358456748]

const Map = () => {
  return (
    <div className="map-main">
      <MapContainer center={coords} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>
            This is an example
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export { Map };
