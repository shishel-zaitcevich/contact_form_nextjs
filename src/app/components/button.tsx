// app/components/ContactButton.tsx

import Link from 'next/link';
import { Button } from '@mui/material';
import styled from 'styled-components';

const pxToRem = (px: number): string => `${px / 16}rem`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  && {
    width: ${pxToRem(177)};
    height: ${pxToRem(31)};
    font-size: ${pxToRem(16)};
    background-color: black;
    border-radius: 10px;
    text-transform: none;
    color: white;

    &:hover {
      background-color: #333;
    }
    @media (max-width: 768px) {
      width: ${pxToRem(130)};
      font-size: ${pxToRem(14)};
    }
  }
`;

export function ContactButton() {
  return (
    <StyledLink href="/contact">
      <StyledButton>Contact us</StyledButton>
    </StyledLink>
  );
}
