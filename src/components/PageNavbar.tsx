import styled from "styled-components";
import { Link } from "react-router-dom";

interface LocationProps {
  LinkTo: string;
}

export default function PageNavbar(props: LocationProps) {
  return (
    <Nav>
      <Overview>OVERVIEW</Overview>
      <Link to={props.LinkTo} className="mobile-titles">
        <Overview>LOCATION</Overview>
      </Link>
    </Nav>
  );
}

const Line = styled.div`
  background: white;
  width: 100%;
  height: 1px;
  opacity: 0.4;
  @media (min-width: 650px) {
    display: none;
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 650px) {
    grid-area: nav;
    flex-direction: column;
    padding-right: 24px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Overview = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1.92857px;
  padding: 20px 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border-bottom: 4px solid #fccb6b;
  }
  @media (min-width: 650px) {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 20px 48px;
    margin-bottom: 20px;
    &:hover {
      border-bottom: none;
      background-color: #fccb6b;
    }
  }
`;

export { Line, Nav };
