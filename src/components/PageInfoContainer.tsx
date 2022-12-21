import styled from "styled-components";
import source from "../assets/svg/icon-source.svg";

type InfoProps = {
  title: string;
  content: string;
  source: string;
};

export default function PageInfoContainer(props: InfoProps) {
  return (
    <InfoContainer>
      <PageTitle>{props.title}</PageTitle>
      <Paragraph>{props.content}</Paragraph>
      <Source>
        Source :{" "}
        <ALink href={props.source} target="_blank">
          Wikipedia
          <SourceIcon />
        </ALink>
      </Source>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  @media (min-width: 650px) {
    grid-area: text;
    align-items: flex-start;
  }
`;

const PageTitle = styled.h2`
  font-family: "Antonio", sans-serif;
  font-size: 34px;
  line-height: 66px;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  @media (min-width: 650px) {
    text-align: left;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Source = styled.div`
  margin-top: 30px;
`;

const ALink = styled.a`
  color: white;
  opacity: 0.5;
`;

const SourceIcon = styled.div`
  background-image: url(${source});
  background-repeat: no-repeat;
  background-size: contain;
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-left: 4px;
`;
