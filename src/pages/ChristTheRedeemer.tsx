import styled from "styled-components";
import data from "../data.json";

import PageNavbar, { Line } from "../components/PageNavbar";
import {
  PageContainer,
  BodyContainer,
  Image,
} from "../styles/PageContainerStyle";
import christTheRedeemer from "../assets/images/O_Cristo_Redentor.jpg";
import PageInfoContainer from "../components/PageInfoContainer";
import PageFooter from "../components/PageFooter";

export default function ChristTheRedeemer() {
  const { name, content, source, visitors, year } = data[1];

  const LinkTo = "location";

  return (
    <PageContainer>
      <BodyContainer>
        <PageNavbar LinkTo={LinkTo} />
        <Line />

        <WonderImage />

        <PageInfoContainer title={name} content={content} source={source} />
      </BodyContainer>

      <PageFooter visitors={visitors} year={year} />
    </PageContainer>
  );
}

const WonderImage = styled(Image)`
  background-image: url(${christTheRedeemer});
`;
