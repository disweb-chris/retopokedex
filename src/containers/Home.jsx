import React from 'react';
import styles from '../assets/styles/Home.module.css';
import bannerImage from '../assets/statics/banner-home.jpg'; 

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.banner}>
        <div className={styles['banner-content']}>
          <img src={bannerImage} alt="Pokémon Popular" className={styles['banner-image']} />
          <h1>¡Bienvenido a tu Pokédex!</h1>
          <p>Explora el mundo de los Pokémon y descubre todos sus secretos.</p>
        </div>
      </section>

      <section className={styles['app-description']}>
        <h2>¿Qué es la Pokédex?</h2>
        <p>La Pokédex es tu guía completa para descubrir y aprender sobre todos los Pokémon. Navega, busca y encuentra información detallada sobre tus Pokémon favoritos.</p>
      </section>

      <section className={styles['tips-tricks']}>
        <h2>Consejos y Trucos</h2>
        <ul>
          <li><strong>Captura Pokémon Raros:</strong> Usa cebos y juega durante eventos especiales para aumentar tus posibilidades.</li>
          <li><strong>Evoluciona Pokémon:</strong> Asegúrate de tener suficientes caramelos y utiliza objetos especiales como Piedras Evolutivas.</li>
          <li><strong>Batallas en Gimnasios:</strong> Conoce los tipos de Pokémon y sus debilidades para formar un equipo equilibrado.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
