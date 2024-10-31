import { styled } from 'styled-components';
import { MainTitle, Title } from './titles';
import { ContentBlockProps } from './data';

const pxToRem = (px: number): string => `${px / 16}rem`;

const BlockContainer = styled.div`
  max-width: ${pxToRem(264)};
  width: 100%;
  min-height: ${pxToRem(50)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: ${pxToRem(32)};
  gap: ${pxToRem(15)};
  text-align: start;
  @media (max-width: 768px) {
    gap: ${pxToRem(10)};
    max-width: 100%;
  }
`;

const TextContainer = styled.p`
  font-size: ${pxToRem(16)};
  line-height: 1.5;
  color: #757575;
`;

interface ContentListProps {
  items: ContentBlockProps[];
}

const ContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const ContentListBlock = styled.div`
  max-width: ${pxToRem(1280)};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${pxToRem(40)};
  gap: ${pxToRem(40)};
  column-gap: ${pxToRem(60)};
  @media (max-width: 768px) {
    padding: ${pxToRem(0)};
    gap: ${pxToRem(15)};
  }
`;

export function ContentList({ items }: ContentListProps) {
  return (
    <ContentListContainer>
      <MainTitle text={'Also very important title'}></MainTitle>
      <ContentListBlock>
        {items.map((item, index) => (
          <BlockContainer key={index}>
            <Title text={item.title} />
            <TextContainer>{item.text}</TextContainer>
          </BlockContainer>
        ))}
      </ContentListBlock>
    </ContentListContainer>
  );
}
