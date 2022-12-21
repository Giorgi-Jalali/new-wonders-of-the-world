import styled from "styled-components";
import { Link } from "react-router-dom";

interface LocationProps {
  LinkTo: string;
}

export default function LocationNavbar(props: LocationProps) {
  return (
    <Nav>
      <Link to={props.LinkTo} className="mobile-titles">
        <Overview>OVERVIEW</Overview>
      </Link>
      <Overview>LOCATION</Overview>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 650px) {
    grid-area: nav;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
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
