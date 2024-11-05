import React from 'react';
import styles from './Banner.module.css';

const Banner: React.FC = () => {
  return (
    <div id="home" className={styles.banner}>
      <div className={styles.conteudoBanner}>
        <h1><strong>Problemas no Carro?</strong></h1>
        <p>
          ㅤA <span className={styles.ivy}>Ivy</span> te ajuda!
        </p>
        <p className={styles.descricao}>
          Descubra rapidamente o que há de errado com <br /> seu veículo. A Ivy analisa os sintomas  <br /> e fornece uma avaliação em minutos.
        </p>
        <button className={styles.botaoCta}>Diagnosticar agora</button>
      </div>
    </div>
  );
};

export default Banner;
