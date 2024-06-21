import { useContext } from "react";
import Contexto from "../context/Contexto";
import '../assets/styles/PokeFavoritos.css';

function PokeFavoritos() {
    const { favoritos, eliminarPokeFavorito } = useContext(Contexto);

    return (
        <div className="favoritos-container">
            <h1>Tus Favoritos</h1>
            <ul className="favoritos-list">
                {favoritos.map(favorito => (
                    <li key={favorito.name} className="favorito-item">
                        {favorito.image && <img src={favorito.image} alt={favorito.name} className="pokemon-image"/>}
                        <span>{favorito.name}</span>
                        <button onClick={() => eliminarPokeFavorito(favorito.name)} className="eliminar-boton">Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PokeFavoritos;