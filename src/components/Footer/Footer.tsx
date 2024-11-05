
"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/fiap.png" alt="Logo" width={200} height={100} className={styles.footerLogo} />
    </footer>
  );
};

export default Footer;
