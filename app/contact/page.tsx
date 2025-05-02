'use client';

import { styled } from 'styled-components';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ContactForm } from './contactForm';

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

export default function ContactFormPage() {
  return (
    <>
      <Head>
        <title>Контактная форма</title>
        <meta
          name="description"
          content="Свяжитесь с нами через контактную форму для получения дополнительной информации."
        />
        <meta
          name="keywords"
          content="контактная форма, связь, контакт, ваш сайт"
        />
      </Head>
      <PageContainer>
        <Header />
        <ContactForm />
        <Footer />
      </PageContainer>
    </>
  );
}
