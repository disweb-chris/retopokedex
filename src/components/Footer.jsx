import React from 'react';
import '../assets/styles/Footer.css';
import pokeballIcon from '../assets/statics/pokemon-logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <h3>Síguenos</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>

                <div className="credits">
                    <a href="/"><img src={pokeballIcon} alt="Pokemon" /></a>
                    <p>Desarrollado por ChrisH</p>
                    <p>Créditos a The Pokémon Company y todos los entrenadores Pokémon del mundo.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
