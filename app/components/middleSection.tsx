import { styled } from 'styled-components';
import { ContactButton } from './button';
import { data } from './data';
import { ContentList } from './middleBlock';

const pxToRem = (px: number): string => `${px / 16}rem`;

const MiddleSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: ${pxToRem(32)};
  margin-top: ${pxToRem(40)};
  margin-bottom: ${pxToRem(40)};
  text-align: start;
  @media (max-width: 768px) {
    padding: ${pxToRem(10)};
    margin-top: ${pxToRem(0)};
    margin-bottom: ${pxToRem(20)};
  }
`;

export function MiddleSection() {
  return (
    <MiddleSectionContainer>
      <ContentList items={data} />
      <ContactButton />
    </MiddleSectionContainer>
  );
}
