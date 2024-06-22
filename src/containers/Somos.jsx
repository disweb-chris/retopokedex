import React from 'react';
import styles from '../assets/styles/Somos.module.css';
import chrisImage from '../assets/statics/equipo1.jpg'; 
import nombre2Image from '../assets/statics/equipo2.jpg'; 
import nombre3Image from '../assets/statics/equipo3.jpg'; 
import equipoImage from '../assets/statics/equipo.jpg'
import bannerImage from '../assets/statics/banner-somos.jpg'; 

function Somos() {
  return (
      <>
          <div className={styles.bannerContainer}>
              <img src={bannerImage} alt="Banner" className={styles.bannerImage} /> 
          </div>
          <div className={styles.somosContainer}>
              <div className={styles.titulo}>
                  <h1>¡Conoce a nuestro equipo!</h1>
                  <p>Somos un grupo de apasionados por los Pokémon dedicados a traerte la mejor información.</p>
              </div>
              <div className={styles.equipoSection}>
                  <div className={styles.equipoColumn}>
                      <h2>Entrenadores Expertos</h2>
                      <ul>
                          <li>
                              <div className={styles.equipoMiembro}>
                                  <img src={chrisImage} alt="Miembro del Equipo" className={styles.equipoImagen} />
                                  <p><strong>ChrisH</strong><br/>Fundador y Desarrollador Principal. Apasionado por los Pokémon desde la infancia.</p>
                              </div>
                          </li>
                          <li>
                              <div className={styles.equipoMiembro}>
                                  <img src={nombre2Image} alt="Miembro del Equipo" className={styles.equipoImagen} />
                                  <p><strong>AshKetchup</strong><br/>Explorador y Cazador de Mitos Pokémon. Siempre en busca de nuevas especies y leyendas.</p>
                              </div>
                          </li>
                          <li>
                              <div className={styles.equipoMiembro}>
                                  <img src={nombre3Image} alt="Miembro del Equipo" className={styles.equipoImagen} />
                                  <p><strong>Mitsy</strong><br/>Estratega de Batallas. Experta en tácticas y movimientos para ganar cualquier enfrentamiento.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className={styles.equipoColumn}>
                      <h2>Nuestros Objetivos</h2>
                      <p><span className='item-obj'>Maestros Pokémon:</span> Nos dedicamos a entrenar a nuestros Pokémon para ser los mejores, como nadie nunca lo fue.</p>
                      <p><span className='item-obj'>Exploración y Aventura:</span> Buscamos y documentamos cada rincón del mundo Pokémon, desde la cueva más oscura hasta las cimas más altas.</p>
                      <p><span className='item-obj'>Conexión y Comunidad:</span> Construimos una comunidad fuerte de entrenadores, donde todos pueden compartir sus aventuras y descubrimientos.</p>
                      <img src={equipoImage} alt="Objetivos" className={styles.equipoImagenPrincipal} />
                  </div>
              </div>
          </div>
      </>
  );
}

export default Somos;