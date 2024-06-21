import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/PokeFavoritos.css"

function Pokemon() {

    const location = useLocation()
    const [pokemon, setPokemon] = useState([])
    const [descripcion, setDescripcion] = useState(""); // estado para la descripción

    const traemePokemon = async ()=> {
        const pedazos = location.pathname.split("/")
        const url = "https://pokeapi.co/api/v2/pokemon/" + pedazos[2]

        const resp = await axios.get(url)
        setPokemon(resp.data)

        console.log("Esto tiene la data: ", resp.data)
    }

    const obtenerDescripcion = async () => { // Función para obtener la descripción
        const partes = location.pathname.split("/");
        const urlEspecie = "https://pokeapi.co/api/v2/pokemon-species/" + partes[2];

        const respuesta = await axios.get(urlEspecie);
        const entradaDescripcion = respuesta.data.flavor_text_entries.find(entry => entry.language.name === "es");
        setDescripcion(entradaDescripcion ? entradaDescripcion.flavor_text : "La descripción de tu pokemon no esta disponible");

        console.log("Descripción: ", entradaDescripcion);
    };

    useEffect(()=> {
        traemePokemon()
        obtenerDescripcion(); 
    },[])

    return ( 
        <div className="pokemonDetailContainer"> 
            <div className="textContainer"> 
                <h1 className="pokemonName">{pokemon?.name}</h1> 
                <p className="pokemonDescription">{descripcion}</p>
            </div>
            <img
                src={pokemon?.sprites?.other["official-artwork"].front_default}
                alt={pokemon?.name}
                className="pokemonImage"
            />
        </div>
     );
}

export default Pokemon;