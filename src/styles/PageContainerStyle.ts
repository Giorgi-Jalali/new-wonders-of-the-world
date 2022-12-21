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
    grid-template-areas: "image image image" "text text nav";
  }
  @media (min-width: 1200px) {
    grid-template-areas:
      "image text"
      "image text"
      "image nav";
  }
`;

const Image = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 320px;
  height: 238px;
  margin: 40px 0;
  @media (min-width: 650px) {
    grid-area: image;
    margin: 40px auto;
  }
  @media (min-width: 1200px) {
    width: 500px;
    height: 372px;
    margin-right: 50px;
  }
`;

export { PageContainer, BodyContainer, Image };