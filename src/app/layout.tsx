// src/app/layout.tsx
import React from 'react';
import Header from '../components/Header/Header';
import './globals.css'; 

export const metadata = {
  title: 'Título da Página',
  description: 'Descrição da Página',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="pt-BR"> 
      <body>
        <Header />
        {children} 
      </body>
    </html>
  );
};

export default RootLayout;
