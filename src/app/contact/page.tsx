import { styled } from 'styled-components';
import { ContactForm } from './contactForm';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const PageContainer = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function ContactFormPage() {
  return (
    <PageContainer>
      <Header />
      <ContactForm />
      <Footer />
    </PageContainer>
  );
}
