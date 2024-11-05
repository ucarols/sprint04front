import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Vantagens from '../components/Escolha/Vantagens';
import QuemSomos from '../components/Escolha/Quemsomos';
import Contato from '../components/Contato/Contato';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Banner />
          <Vantagens />
          <QuemSomos />
          <Contato />
          <Footer />
          
          {children}
        </main>
      </body>
    </html>
  );
}
