import React from 'react';
import styles from '../assets/styles/Somos.module.css';
import chrisImage from '../assets/statics/equipo1.jpg'; 
import nombre2Image from '../assets/statics/equipo2.jpg'; 
import nombre3Image from '../assets/statics/equipo3.jpg'; 
import equipoImage from '../assets/statics/equipo.jpg'

const Somos = () => {
    return (
      <div className={styles.somosContainer}>
        <div className={styles.titulo}>
          <h1>¡Conoce a nuestro equipo!</h1>
          <p>Somos un grupo de apasionados por los Pokémon dedicados a traerte la mejor información.</p>
        </div>
        <div className={styles.equipoSection}>
          <div className={styles.equipoColumn}>
            <h2>Entrenadores Expertos</h2>
            <div className={styles.equipoMiembro}>
              <img src={chrisImage} alt="ChrisH" className={styles.equipoImagen} />
              <h3>ChrisH</h3>
              <p>Fundador y Desarrollador Principal. Apasionado por los Pokémon desde la infancia.</p>
            </div>
            <div className={styles.equipoMiembro}>
              <img src={nombre2Image} alt="AshKetchup" className={styles.equipoImagen} />
              <h3>AshKetchup</h3>
              <p>Explorador y Cazador de Mitos Pokémon. Siempre en busca de nuevas especies y leyendas.</p>
            </div>
            <div className={styles.equipoMiembro}>
              <img src={nombre3Image} alt="Mistyx" className={styles.equipoImagen} />
              <h3>Mistyx</h3>
              <p>Estratega de Batallas. Experto en tácticas y movimientos para ganar cualquier enfrentamiento.</p>
            </div>
          </div>
          <div className={styles.equipoColumn}>
            <h2>Nuestros Objetivos</h2>
            <ul>
              <li><strong>Maestros Pokémon:</strong> Nos dedicamos a entrenar a nuestros Pokémon para ser los mejores, como nadie nunca lo fue.</li>
              <li><strong>Exploración y Aventura:</strong> Buscamos y documentamos cada rincón del mundo Pokémon, desde la cueva más oscura hasta las cimas más altas.</li>
              <li><strong>Conexión y Comunidad:</strong> Construimos una comunidad fuerte de entrenadores, donde todos pueden compartir sus aventuras y descubrimientos.</li>
            </ul>
            <img src={equipoImage} alt="Equipo Pokémon" className={styles.equipoImagenPrincipal} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Somos;