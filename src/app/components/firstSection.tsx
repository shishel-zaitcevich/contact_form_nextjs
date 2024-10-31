// app/components/FirstSection.tsx

import { styled } from 'styled-components';
import { MainTitle } from './titles';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const pxToRem = (px: number): string => `${px / 16}rem`;

const FirstSectionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: ${pxToRem(1280)};
  width: 100%;
  min-height: ${pxToRem(351)};
  height: 100%;
  font-size: ${pxToRem(32)};
  background-color: #f5f5f5;
  padding: ${pxToRem(40)};
  padding-bottom: ${pxToRem(80)};
  text-align: start;
  border-top: #c6c2c2 1px solid;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: ${pxToRem(18)};
    padding: ${pxToRem(10)};
  }
`;

const DescriptionBlock = styled.div`
  width: ${pxToRem(362)};
  display: flex;
  flex-direction: column;
  @media (max-width: 920px) {
    margin-bottom: ${pxToRem(40)};
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: ${pxToRem(40)};
  }
`;

const TextContainer = styled.p`
  font-size: ${pxToRem(16)};
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: ${pxToRem(16)};
  }
`;

const VideoContainer = styled.div`
  max-width: ${pxToRem(500)};
  width: 100%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export function FirstSection() {
  return (
    <>
      <FirstSectionContainer>
        <DescriptionBlock>
          <MainTitle text="Most important title on the page" />
          <TextContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </TextContainer>
        </DescriptionBlock>
        <VideoContainer>
          <LiteYouTubeEmbed
            id="dQw4w9WgXcQ"
            title="YouTube video player"
            poster="maxresdefault"
          />
        </VideoContainer>
      </FirstSectionContainer>
    </>
  );
}
