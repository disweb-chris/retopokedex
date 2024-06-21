import { useContext } from "react";
import Contexto from "../context/Contexto";

function Contact() {
    const {saludar, pokemones, traemePokemones} = useContext(Contexto)

    console.log(pokemones)

    const handleClick = ()=>{
        traemePokemones()
        console.log(pokemones)
    }
    useContext(Contexto)

    return ( <>    
    <h1>Soy el Contacto</h1> 
    <button onClick={handleClick}>Traeme a los Pokemoncitos</button>
    </>);
}

export default Contact;