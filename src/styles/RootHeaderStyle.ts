import styled from "styled-components";
import hamburger from "../assets/svg/icon-hamburger.svg";

const Header = styled.div`
  width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  @media (min-width: 650px) {
    width: 650px;
    flex-direction: column;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Title = styled.div`
  font-family: "Antonio", sans-serif;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  @media (min-width: 650px) {
    margin: 30px 0;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 1px;
    opacity: 0.9;
  }
`;

const Hamburger = styled.div`
  @media (min-width: 650px) {
    display: none;
  }
`;

const HamburgerIcon = styled.div`
  background-image: url(${hamburger});
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 17px;
  cursor: pointer;
`;

const PageTitles = styled.div`
  display: none;
  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 40px;
  }
`;

const Page = styled.div`
  margin-bottom: 8px;
`;

const Line = styled.div`
  background: white;
  width: 100%;
  height: 1px;
  opacity: 0.4;
`;

export { Header, Title, Hamburger, HamburgerIcon, PageTitles, Page, Line };