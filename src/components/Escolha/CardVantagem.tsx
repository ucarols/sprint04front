import React from 'react';
import Image from 'next/image';
import styles from './CardVantagem.module.css';

interface CardVantagemProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CardVantagem: React.FC<CardVantagemProps> = ({ title, description, image, link }) => {
  return (
    <div className={styles.cardVantagem}>
      <Image src={image} alt={`Descrição da ${title}`} width={280} height={160} className={styles.imagem} />
      <h3 className={styles.titulo}>{title}</h3>
      <p className={styles.descricao}>{description}</p>
      <a href={link} className={styles.saibaMais}>Saiba mais</a>
    </div>
  );
};

export default CardVantagem;
