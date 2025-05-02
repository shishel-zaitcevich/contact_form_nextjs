'use client';
import Head from 'next/head';
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
    <>
      <Head>
        <meta property="og:title" content="Contact form" />
        <meta
          property="og:description"
          content="Best of the best contact form"
        />
        <meta
          property="og:image"
          content="https://fotoblik.ru/wp-content/uploads/2023/09/smeshnoi-kot-22.webp"
        />
        <meta
          property="og:url"
          content="https://contact-form-nextjs-weld.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="https://fotoblik.ru/wp-content/uploads/2023/09/smeshnoi-kot-22.webp"
        />
        <meta name="twitter:title" content="Contact form" />
        <meta
          name="twitter:description"
          content="Best of the best contact form"
        />
        <meta
          name="twitter:image"
          content="https://fotoblik.ru/wp-content/uploads/2023/09/smeshnoi-kot-22.webp"
        />
        <meta
          name="twitter:url"
          content="https://contact-form-nextjs-weld.vercel.app/"
        />

        <title>Contact form</title>
        <meta name="description" content="Best of the best contact form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <Header />
        <MainContent />
        <Footer />
      </PageContainer>
    </>
  );
}
