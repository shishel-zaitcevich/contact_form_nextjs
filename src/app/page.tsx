'use client';
import styled from 'styled-components';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { MainContent } from './components/mainContent';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  margin-right: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function HomePage() {
  return (
    <PageContainer>
      <Header />
      <MainContent />
      <Footer />
    </PageContainer>
  );
}
