import { Link } from "react-router-dom";
import "../assets/styles/Header.css";
import logo from "../assets/statics/pokemon-logo.png";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Pokédex Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/somos">Quienes Somos</Link></li>
                    <li><Link to="/pokemones">Pokemones</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
