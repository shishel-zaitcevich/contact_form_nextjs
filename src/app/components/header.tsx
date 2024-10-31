import { styled } from 'styled-components';

import { Title } from './titles';
import { ContactButton } from './button';

const pxToRem = (px: number): string => `${px / 16}rem`;

const HeaderContainer = styled.header`
  max-width: ${pxToRem(1280)};
  width: 100vw;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-align: start;
  padding: ${pxToRem(40)};
  z-index: 100;
  @media (max-width: 768px) {
    padding: ${pxToRem(10)};
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Title text={'Some Company'}></Title>
      <ContactButton />
    </HeaderContainer>
  );
}
