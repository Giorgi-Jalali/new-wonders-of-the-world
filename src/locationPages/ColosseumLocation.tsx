import data from "../data.json";
import "../App.css";

import {
  PageContainer,
  BodyContainer,
  Paragraph,
} from "../styles/LocationPageContainerStyle";
import LocationNavbar from "../components/LocationNavbar";
import { Line } from "../components/PageNavbar";
import Map from "../components/Map";
import PageFooter from "../components/PageFooter";

export default function PetraLocation() {
  const { location, latitude, longitude, visitors, year } = data[2];

  const LinkTo = "..";

  return (
    <PageContainer>
      <BodyContainer>
        <LocationNavbar LinkTo={LinkTo} />
        <Line />

        <Map latitude={latitude} longitude={longitude} />

        <Paragraph>{location}</Paragraph>
      </BodyContainer>

      <PageFooter visitors={visitors} year={year} />
    </PageContainer>
  );
}
