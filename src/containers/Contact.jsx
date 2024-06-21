import Contexto from "../context/Contexto";
import { useContext, useState } from "react";
import styles from '../assets/styles/Contact.module.css';
import contactBanner from '../assets/statics/banner-contact.jpg'; 

function Contact() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Manejo del envío del formulario
        console.log('Enviando mensaje:', { nombre, email, mensaje });
        setEnviado(true);
    };

    return (
        <div className={styles['contact-page-container']}>
            <div className={styles['contact-banner']} style={{ backgroundImage: `url(${contactBanner})` }}>
                <p className={styles['contact-banner-text']}>¡Nos encantaría saber de ti! Déjanos tu mensaje y te responderemos lo antes posible.</p>
            </div>
            <div className={styles['contact-container']}>
                <div className={styles['contact-text-container']}>
                    <p className={styles['contact-text']}>
                    Bienvenido a nuestra página de contacto, Entrenador Pokémon! Aquí, en nuestro Centro Pokémon, estamos siempre emocionados de escuchar las aventuras y experiencias de otros entrenadores. Ya sea que tengas una pregunta sobre los Pokémon, necesites ayuda con una batalla o simplemente quieras compartir tus historias de exploración, estamos aquí para ayudarte.
                    </p>
                    <p className={styles['contact-text-bajada']}>
                    Nuestro equipo de expertos Pokémon está listo para asistirte con cualquier consulta que puedas tener. Desde consejos sobre cómo evolucionar a tu Eevee hasta estrategias para vencer a los Líderes de Gimnasio más desafiantes, estamos a solo un mensaje de distancia.
                    </p>
                    <h3 className={styles['h3-bajada']}>¡Atrévete a soñar en grande y a alcanzar nuevas alturas en tu viaje Pokémon!</h3>
                </div>
                <form onSubmit={handleSubmit} className={styles['contact-form']}>
                    <div className={styles['form-group']}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea
                            id="mensaje"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={styles['submit-button']}>Enviar</button>
                    {enviado && <p className={styles['success-message']}>¡Mensaje enviado con éxito!</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;