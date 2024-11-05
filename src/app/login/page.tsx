"use client";

import React, { useState } from 'react';
import styles from './Login.module.css';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação aqui
  };

  return (
    <>
      <div className={styles.login}>
        <Image src="/azul.png" alt="Logo" className={styles.logo} width={100} height={100} />
        <h2>Login</h2>
        <form className={styles.formulariologin} onSubmit={handleLogin}>
          <div className={styles.grupoformulario}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.grupoformulario}>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.botaoenviar}>
            Entrar
          </button>
        </form>
        <p>
          Não tem uma conta? <Link href="/criar-conta">Criar Conta</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
