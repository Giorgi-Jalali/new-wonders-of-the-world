import styled from "styled-components";

type FooterProps = {
  visitors: string;
  year: string;
};

export default function PageFooter(props: FooterProps) {
  return (
    <Footer>
      <FooterDiv>
        <InfoTitle>Visitors (in 2019)</InfoTitle>
        <Stats>{props.visitors}</Stats>
      </FooterDiv>
      <FooterDiv>
        <InfoTitle>established year</InfoTitle>
        <Stats>{props.year}</Stats>
      </FooterDiv>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 0 24px;
  @media (min-width: 650px) {
    flex-direction: row;
    margin-bottom: 30px;
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  @media (min-width: 650px) {
    flex-direction: column;
    margin: 20px;
  }
`;

const InfoTitle = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.727273px;
  text-transform: uppercase;
  opacity: 0.6;
  @media (min-width: 650px) {
    margin-bottom: 10px;
  }
`;

const Stats = styled.div`
  font-family: "Antonio", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
`;
