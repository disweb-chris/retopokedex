// TYPES

const LISTAME_POKEMONES = "LISTAME_POKEMONES"
const DAME_POKEMON = "DAME_POKEMON"
const GUARDAME_POKEMON = "GUARDAME_POKEMON"
const ELIMINAR_FAVORITO = "ELIMINAR_FAVORITO"

export default function Reducer(state, action) {
    const { payload, type } = action

    switch(type) {
        case LISTAME_POKEMONES:
            return {...state, pokemones: payload}

        case GUARDAME_POKEMON:
            return {...state, 
                favoritos: [...state.favoritos, payload]}
        
        case ELIMINAR_FAVORITO:
            return {...state,
                favoritos: state.favoritos.filter(fav => fav.name !== payload)

            }
    }
}