import { useEffect, useContext } from "react";
import Item from "../components/Item";
import Contexto from "../context/Contexto";

function Pokemones() {
    const { pokemones, traemePokemones } = useContext(Contexto);

    useEffect(() => {
        traemePokemones();
    }, []);

    return (
        <>
            <ul className="pokemones-list">
                {pokemones.map((pokemon) => (
                    <Item key={pokemon.name} name={pokemon.name} url={pokemon.url} className="pokemon-item"/>
                ))}
            </ul>
        </>
    );
}

export default Pokemones;
