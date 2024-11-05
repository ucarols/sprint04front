"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [selecionado, setSelecionado] = useState('');

  const alternarMenu = () => {
    setMenuAberto((prev) => !prev);
  };

  const handleItemClick = (item: string) => {
    setSelecionado(item);
    setMenuAberto(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={90} height={90} />
      </div>
      <div className={styles.menuContainer}>
        <Image
          src={menuAberto ? "/close.png" : "/menu.png"} 
          alt="Menu"
          width={30}
          height={30}
          onClick={alternarMenu}
          className={styles.iconeMenu}
        />
        {menuAberto && (
          <nav className={styles.dropdown}>
            <ul className={styles.listaNav}>
              <li className={selecionado === "login" ? styles.ativo : ''}>
                <Link href="/login" onClick={() => handleItemClick("login")}>Login</Link>
              </li>
              <li className={selecionado === "criar-conta" ? styles.ativo : ''}>
                <Link href="/cadastro" onClick={() => handleItemClick("criar-conta")}>Criar Conta</Link>
              </li>

              <li className={selecionado === "chat" ? styles.ativo : ''}>
                <Link href="/chat" onClick={() => handleItemClick("chat")}>Chat</Link>
              </li>
              <li className={selecionado === "sobre" ? styles.ativo : ''}>
                <Link href="#sobre" onClick={() => handleItemClick("sobre")}>Sobre Nós</Link>
              </li>
              <li className={selecionado === "contato" ? styles.ativo : ''}>
                <Link href="#contato" onClick={() => handleItemClick("contato")}>Contato</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
