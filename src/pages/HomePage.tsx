import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  HomePageContainer,
  Ul,
  Li,
  MobileNav,
  CircleTitleContainer,
  ColorCircle,
  MobilePageTitle,
  Arrow,
  Line,
} from "../styles/MobileHomePageStyle";

import data from "../data.json";

import chichenItza from "../assets/images/Chichen_Itza.jpg";
import christTheRedeemer from "../assets/images/O_Cristo_Redentor.jpg";
import colosseum from "../assets/images/Colosseo.jpg";
import gizaPyramids from "../assets/images/Pyramids_of_Giza.jpg";
import greatWallOfChina from "../assets/images/The_Great_Wall_of_China.jpg";
import machuPicchu from "../assets/images/Machu_Picchu.jpg";
import petra from "../assets/images/petra.jpg";
import tajMahal from "../assets/images/Taj_Mahal.jpg";

import {
  Card,
  Overlay,
  CardTitle,
  CardLocation,
} from "../styles/HomePageStyle";

export default function HomePage() {
  return (
    <>
      <HomePageContainer>
        <Ul>
          {data.map((wonder) => {
            return (
              <Li key={wonder.name}>
                <Link to={wonder.path} className="mobile-titles">
                  <MobileNav>
                    <CircleTitleContainer>
                      <ColorCircle color={wonder.color} />
                      <MobilePageTitle>{wonder.name}</MobilePageTitle>
                    </CircleTitleContainer>
                    <Arrow />
                  </MobileNav>
                </Link>
                <Line />
              </Li>
            );
          })}
        </Ul>
      </HomePageContainer>

      <HomePageDiv>
        <Link to="chichen-itza" className="mobile-titles">
          <Card1>
            <Overlay>
              <CardTitle>{data[0].name}</CardTitle>
              <CardLocation>{data[0].location}</CardLocation>
            </Overlay>
          </Card1>
        </Link>

        <Link to="christ-the-redeemer" className="mobile-titles">
          <Card2>
            <Overlay>
              <CardTitle>{data[1].name}</CardTitle>
              <CardLocation>{data[1].location}</CardLocation>
            </Overlay>
          </Card2>
        </Link>

        <Link to="colosseum" className="mobile-titles">
          <Card3>
            <Overlay>
              <CardTitle>{data[2].name}</CardTitle>
              <CardLocation>{data[2].location}</CardLocation>
            </Overlay>
          </Card3>
        </Link>

        <Link to="great-wall-of-china" className="mobile-titles">
          <Card4>
            <Overlay>
              <CardTitle>{data[3].name}</CardTitle>
              <CardLocation>{data[3].location}</CardLocation>
            </Overlay>
          </Card4>
        </Link>

        <Link to="machu-picchu" className="mobile-titles">
          <Card5>
            <Overlay>
              <CardTitle>{data[4].name}</CardTitle>
              <CardLocation>{data[4].location}</CardLocation>
            </Overlay>
          </Card5>
        </Link>

        <Link to="petra" className="mobile-titles">
          <Card6>
            <Overlay>
              <CardTitle>{data[5].name}</CardTitle>
              <CardLocation>{data[5].location}</CardLocation>
            </Overlay>
          </Card6>
        </Link>

        <Link to="taj-mahal" className="mobile-titles">
          <Card7>
            <Overlay>
              <CardTitle>{data[6].name}</CardTitle>
              <CardLocation>{data[6].location}</CardLocation>
            </Overlay>
          </Card7>
        </Link>

        <Link to="giza-pyramids" className="mobile-titles">
          <Card8>
            <Overlay>
              <CardTitle>{data[7].name}</CardTitle>
              <CardLocation>{data[7].location}</CardLocation>
            </Overlay>
          </Card8>
        </Link>
      </HomePageDiv>
    </>
  );
}

const HomePageDiv = styled.div`
  display: none;
  @media (min-width: 650px) {
    display: grid;
    grid-template-areas:
      "card card"
      "card card"
      "card card"
      "card card";
    gap: 30px;
    padding: 50px;
  }
  @media (min-width: 1200px) {
    grid-template-areas:
      "card card card card"
      "card card card card";
  }
`;

const Card1 = styled(Card)`
  @media (min-width: 650px) {
    background-image: url(${chichenItza});
  }
`;

const Card2 = styled(Card)`
  @media (min-width: 650px) {
    background-image: url(${christTheRedeemer});
  }
`;

const Card3 = styled(Card)`
  @media (min-width: 650px) {
    background-image: url(${colosseum});
  }
`;

const Card4 = styled(Card)`
  @media (min-width: 650px) {
    background-image: url(${greatWallOfChina});
  }
`;

const Card5 = styled(Card)`
  @media (min-width: 650px) {
    background-image: url(${machuPicchu});
  }
`;

const Card6 = styled(Card)`
  @media (min-width: 650px) {
    background-image: url(${petra});
  }
`;

const Card7 = styled(Card)`
  @media (min-width: 650px) {
    background-image: url(${tajMahal});
  }
`;

const Card8 = styled(Card)`
  @media (min-width: 650px) {
    background-image: url(${gizaPyramids});
  }
`;
