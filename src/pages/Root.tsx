import { Link, Outlet } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import background from "../assets/svg/background-stars.svg";
import {
  Header,
  Title,
  Hamburger,
  HamburgerIcon,
  PageTitles,
  Page,
  Line,
} from "../styles/RootHeaderStyle";

import data from "../data.json";

export default function Root() {
  return (
    <div>
      <GlobalStyle />

      <Header>
        <Title>New Wonders of the World</Title>

        <Hamburger>
          <Link to="/">
            <HamburgerIcon />
          </Link>
        </Hamburger>

        <PageTitles>
          <Page>
            <Link to="/" className="mobile-titles">
              Home
            </Link>
          </Page>

          {data.map((wonder) => {
            return (
              <Page key={wonder.name}>
                <Link to={wonder.path} className="mobile-titles">
                  {wonder.name}
                </Link>
              </Page>
            );
          })}
        </PageTitles>
      </Header>

      <Line></Line>
      <Outlet />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Antonio&display=swap');
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: 'Antonio', sans-serif;
  font-family: 'League Spartan', sans-serif;
  font-weight: 400;
}

  body {
    background-color: #070724;
    background-image: url(${background});
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media (min-width: 1200px) {
      min-width: 99vw;
      min-height: 99vh;
    }
  }

  .mobile-titles {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 1.36364px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.9;
    @media (min-width: 650px) {
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 1.2px;
    }
    @media (min-width: 1200px) {
       font-size: 14px;
       line-height: 20px;
       letter-spacing: 1.2px;
    }
  }

  .mobile-titles:hover {
    opacity: 1;
  }
`;
