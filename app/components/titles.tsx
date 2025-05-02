import { styled } from 'styled-components';

const pxToRem = (px: number): string => `${px / 16}rem`;

interface MainTitleProps {
  text: string;
}

const MainTitleContainer = styled.h1`
  font-size: ${pxToRem(48)};
  margin: 0;
  margin-bottom: ${pxToRem(40)};
  @media (max-width: 768px) {
    margin-bottom: ${pxToRem(20)};
    font-size: ${pxToRem(32)};
  }
`;

export function MainTitle({ text }: MainTitleProps) {
  return <MainTitleContainer>{text} </MainTitleContainer>;
}

const TitleContainer = styled.h3`
  margin: 0;
  font-size: ${pxToRem(24)};
  @media (max-width: 768px) {
    font-size: ${pxToRem(18)};
  }
`;

export function Title({ text }: MainTitleProps) {
  return <TitleContainer>{text} </TitleContainer>;
}
const ResponseTitleContainer = styled.h1`
  font-size: ${pxToRem(48)};
  margin: 0;
  margin-bottom: ${pxToRem(40)};
  max-width: ${pxToRem(600)};
  @media (max-width: 768px) {
    margin-bottom: ${pxToRem(20)};
    font-size: ${pxToRem(32)};
  }
`;

export function ResponseTitle({ text }: MainTitleProps) {
  return <ResponseTitleContainer>{text} </ResponseTitleContainer>;
}
