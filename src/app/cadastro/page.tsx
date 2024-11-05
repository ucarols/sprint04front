"use client";

import React, { useState } from 'react';
import styles from './cadastro.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [placa, setPlaca] = useState('');
  const [cor, setCor] = useState('');
  const [ano, setAno] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.login}>
      <Image src="/azul.png" alt="Logo" className={styles.logo} width={100} height={100} />
      <h2>Crie sua conta</h2>
      <form className={styles.formularioLogin} onSubmit={handleCadastro}>
        <div className={styles.grupoFormulario}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className={styles.grupoFormulario}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.grupoFormulario}>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <div className={styles.grupoFormulario}>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div className={styles.grupoFormulario}>
          <label htmlFor="veiculo">Veículo:</label>
          <input
            type="text"
            id="veiculo"
            value={veiculo}
            onChange={(e) => setVeiculo(e.target.value)}
            required
          />
        </div>
        <div className={styles.grupoFormulario}>
          <label htmlFor="placa">Placa:</label>
          <input
            type="text"
            id="placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
        </div>
        <div className={styles.grupoFormulario}>
          <label htmlFor="cor">Cor:</label>
          <input
            type="text"
            id="cor"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            required
          />
        </div>
        <div className={styles.grupoFormulario}>
          <label htmlFor="ano">Ano:</label>
          <input
            type="number"
            id="ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </div>
        <div className={styles.grupoFormulario}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.botaoEnviar}>
          Cadastrar
        </button>
      </form>
      <p>
        Já tem uma conta? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default Cadastro;
