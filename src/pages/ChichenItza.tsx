import styled from "styled-components";
import data from "../data.json";

import PageNavbar, { Line } from "../components/PageNavbar";
import {
  PageContainer,
  BodyContainer,
  Image,
} from "../styles/PageContainerStyle";
import chichenItza from "../assets/images/Chichen_Itza.jpg";
import PageInfoContainer from "../components/PageInfoContainer";
import PageFooter from "../components/PageFooter";

export default function ChichenItza() {
  const { name, content, source, visitors, year } = data[0];

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
  background-image: url(${chichenItza});
`;
