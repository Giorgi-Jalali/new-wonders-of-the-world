import styled from "styled-components";

const Card = styled.div`
  @media (min-width: 650px) {
    /* background-image: url(); */
    background-repeat: no-repeat;
    background-size: cover;
    width: 250px;
    height: 187px;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.4s;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Overlay = styled.div`
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  transition: 0.4s;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const CardTitle = styled.div`
  @media (min-width: 650px) {
    font-weight: 700;
    font-size: 14px;
    text-align: center;
  }
`;

const CardLocation = styled.div`
  @media (min-width: 650px) {
    font-size: 10px;
    text-align: center;
    margin-top: 10px;
  }
`;

export { Card, Overlay, CardTitle, CardLocation };