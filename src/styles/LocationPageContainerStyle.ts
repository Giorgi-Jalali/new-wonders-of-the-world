import styled from "styled-components";

const PageContainer = styled.div`
  width: 375px;
  @media (min-width: 650px) {
    width: 650px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 650px) {
    display: grid;
    grid-template-areas: "map" "text" "nav";
    gap: 20px;
  }
  @media (min-width: 1200px) {
    grid-template-areas:
      "map map nav"
      "map map nav"
      "text text nav";
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  @media (min-width: 650px) {
    grid-area: text;
  }
`;

export { PageContainer, BodyContainer, Paragraph };