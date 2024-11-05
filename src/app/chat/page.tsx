"use client";

import React, { useState } from 'react';
import styles from './chat.module.css';

const ChatPage: React.FC = () => {
  const [mensagem, setMensagem] = useState('');
  const [conversas, setConversas] = useState([
    { remetente: 'Ivy', texto: 'Olá, eu sou a Ivy e estou aqui para te ajudar!' },
  ]);

  const handleEnviarMensagem = (event: React.FormEvent) => {
    event.preventDefault();

    if (mensagem.trim() !== '') {
      const novaConversa = { remetente: 'Você', texto: mensagem };
      setConversas([...conversas, novaConversa]);
      setMensagem('');

      setTimeout(() => {
        const respostaIvy = { remetente: 'Ivy', texto: 'Estou aqui para ajudar, como posso ajudar?' };
        setConversas((prevConversas) => [...prevConversas, respostaIvy]);
      }, 1000);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {conversas.map((conversa, index) => (
          <div key={index} className={`${styles.mensagem} ${conversa.remetente === 'Você' ? styles.usuario : styles.ivy}`}>
            <strong>{conversa.remetente}: </strong> {conversa.texto}
          </div>
        ))}
      </div>
      <form className={styles.chatForm} onSubmit={handleEnviarMensagem}>
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Digite sua mensagem..."
          className={styles.inputMensagem}
          required
        />
        <button type="submit" className={styles.botaoEnviar}>Enviar</button>
      </form>
    </div>
  );
};

export default ChatPage;
