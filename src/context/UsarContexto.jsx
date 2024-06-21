import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer, useEffect } from "react";
import axios from "axios";

function UsarContexto(props) {

    const {children} = props;
    const estadoInicial = {
        pokemones: [{name: "Pikachu", url:"", front_default:""}],
        favoritos: JSON.parse(localStorage.getItem('pokeFavoritos')) || [], // Cargar desde localStorage 
    };

    const [state, dispatch] = useReducer(Reducer, estadoInicial)

    useEffect(() => {
        localStorage.setItem('pokeFavoritos', JSON.stringify(state.favoritos));
    }, [state.favoritos]);

    const traemePokemones = async ()=> {
        const resp = await axios.get("https://pokeapi.co/api/v2/pokemon")
        
        dispatch({type:"LISTAME_POKEMONES", payload: resp.data.results})
    }

    const guardamePokemon = (item)=> {
        console.log("Guardame pokemon")
        dispatch({type:"GUARDAME_POKEMON", payload: item})
        console.log("Favoritos: ", state.favoritos)
    }

    const eliminarPokeFavorito = (name) => {
        dispatch({ type: 'ELIMINAR_FAVORITO', payload: name });
    };

    return ( <>
        <Contexto.Provider value={{guardamePokemon, traemePokemones, eliminarPokeFavorito, pokemones:state.pokemones, favoritos:state.favoritos}} >
         {children}
        </Contexto.Provider> 
        </>);
}

export default UsarContexto;