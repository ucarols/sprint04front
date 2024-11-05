
"use client";
import React, { useState } from 'react';
import styles from './Contato.module.css';

const SecaoContato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Mensagem enviada:', { nome, email, mensagem });
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <section id="contato" className={styles.secaoContato}>
      <h2>Fale Conosco</h2>
      <p>Se você tiver alguma dúvida ou sugestão, entre em contato!</p>
      <form onSubmit={handleSubmit} className={styles.formularioContato}>
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
          <label htmlFor="mensagem">Digite sua mensagem:</label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.botaoEnviar}>Enviar</button>
      </form>
    </section>
  );
};

export default SecaoContato;
