import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Contexto from "../context/Contexto";

function Item({ name, url }) {
    const [image, setImage] = useState(null);
    const { guardamePokemon } = useContext(Contexto);

    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setImage(data.sprites.front_default);
            } catch (error) {
                console.error("Error cargando la imagen de tu pokemon", error);
            }
        }

        if (url) {
            fetchImage();
        }
    }, [url]);

    return (
        <li className="favorito-item">
            {image ? (
                <Link to={`/pokemones/${name}`}>
                    <img src={image} alt={name} className="pokemon-image" />
                </Link>
            ) : (
                <p>Cargando Pokemoncitos...</p>
            )}
            <Link to={`/pokemones/${name}`} className="pokemon-link">
                <span>{name}</span>
            </Link>
            <button onClick={() => guardamePokemon({ name, url, image })} className="agregar-favorito-boton">
                Agregar a Favoritos
            </button>
        </li>
    );
}

export default Item;
