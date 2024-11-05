// components/Vantagens/Vantagens.tsx

import React from 'react';
import CardVantagem from '../Escolha/CardVantagem';
import styles from './Vantagens.module.css';

const Vantagens: React.FC = () => {
  const vantagens = [
    {
      title: 'Soluções para seu carro na palma da sua mão',
      description: 'Receba diagnósticos rápidos e recomendações de manutenção com apenas alguns toques na tela.',
      image: '/carro.PNG',
      link: '#',
    },
    {
      title: 'Sem surpresas no orçamento',
      description: 'Tenha previsões de custo antes de qualquer serviço e mantenha seu orçamento sempre sob controle.',
      image: '/surpresa.PNG',
      link: '#',
    },
    {
      title: 'Encontre mecânicos próximos de você',
      description: 'Descubra as melhores oficinas próximas a você e receba a assistência que seu veículo merece.',
      image: '/encontre.png',
      link: '#',
    },
  ];

  return (
    <div id="services" className={styles.vantagens}>
      <h2>Vantagens do Porto Assistente</h2>
      <div className={styles['vantagens-container']}>
        {vantagens.map((vantagem, index) => (
          <CardVantagem
            key={index}
            title={vantagem.title}
            description={vantagem.description}
            image={vantagem.image}
            link={vantagem.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Vantagens;
