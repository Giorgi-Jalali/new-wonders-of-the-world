import styled from "styled-components";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "../App.css";

interface LatLongProps {
  latitude: string;
  longitude: string;
}

export default function Map(props: LatLongProps) {
  const lat = parseFloat(props.latitude);
  const long = parseFloat(props.longitude);

  return (
    <Location className="App">
      <MapContainer
        center={[lat, long]}
        zoom={7}
        zoomControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Location>
  );
}

const svgIcon = L.divIcon({
  html: `
  <svg xmlns="http://www.w3.org/2000/svg"
  width="46"
  height="56">
  <path fill="blue"
  d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/>
  </svg>`,
  className: "svg-icon",
  iconSize: [40, 40],
});

L.Marker.prototype.options.icon = svgIcon;

const Location = styled.div`
  width: 320px;
  height: 400px;
  border-radius: 10px;
  margin: 40px 0;
  @media (min-width: 650px) {
    width: 500px;
    grid-area: map;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1200px) {
    margin-right: 50px;
  }
`;
