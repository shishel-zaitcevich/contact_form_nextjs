import { styled } from 'styled-components';
import { Title } from './titles';

const pxToRem = (px: number): string => `${px / 16}rem`;

const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  text-align: center;
  color: black;
  margin-top: ${pxToRem(40)};
  padding-bottom: ${pxToRem(40)};
  @media (max-width: 768px) {
    padding: ${pxToRem(10)};
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <Title text={'Some Company 2024'}></Title>
    </FooterContainer>
  );
}
