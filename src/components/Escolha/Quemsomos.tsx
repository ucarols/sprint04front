import React from 'react';
import Image from 'next/image';
import styles from './QuemSomos.module.css';

const QuemSomos: React.FC = () => {
  return (
    <div id="sobre" className={styles.secaoQuemSomos}>
      <h2>Quem Somos</h2>
      <p>Somos uma equipe dedicada a fornecer soluções para o seu carro na palma da sua mão.</p>
      <p>Nossa missão é garantir que você tenha sempre a melhor assistência e suporte para seu veículo.</p>
      
      <h3>Conheça nossa equipe</h3>
      <div className={styles.containerEquipe}>
        <div className={styles.membroEquipe}>
          <Image src="/cacos.PNG" alt="Membro 1" width={120} height={120} className={styles.fotoMembro} />
          <strong>Caroline de Oliveira</strong>
          <div>RM: 559123</div>
        </div>
        <div className={styles.membroEquipe}>
          <Image src="/giulia.jpg" alt="Membro 2" width={120} height={120} className={styles.fotoMembro} />
          <strong>Giulia Correa Camillo</strong>
          <div>RM: 554473</div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
