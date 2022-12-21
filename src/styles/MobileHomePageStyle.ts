import styled from "styled-components";
import arrow from "../assets/svg/icon-chevron.svg";

type CircleColorProps = {
  color: string;
}

const HomePageContainer = styled.div`
  @media (min-width: 650px) {
    display: none;
  }
`;

const Ul = styled.ul`
  padding: 20px 24px;
`;

const Li = styled.li`
  list-style: none;
`;

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const CircleTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorCircle = styled.div<CircleColorProps>`
  background-color: ${(props) => (props.color)};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 25px;
`;

const MobilePageTitle = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
`;

const Arrow = styled.div`
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 6px 10px;
  width: 8px;
  height: 12px;
  margin-left: -10px;
`;

const Line = styled.div`
  background: white;
  width: 100%;
  height: 1px;
  opacity: 0.1;
`;

export {HomePageContainer, Ul, Li, MobileNav, CircleTitleContainer, ColorCircle, MobilePageTitle, Arrow, Line };