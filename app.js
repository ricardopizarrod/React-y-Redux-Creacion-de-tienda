//import { createStore } from "redux"; const createStore = requiere('redux').createStore;
const createStore = require('redux').createStore;

//##### Actions
const BUY_POKEMON = 'BUY_POKEMON';
const RETURN_POKEMON = 'RETURN_POKEMON';

const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

const return_pokemon_action = (cant) =>{
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}


//##### Reducers
const default_games_state = {
    pokemon: 10
}
const games_reducer = (state = default_games_state, action) => {
    switch(action.type){
        case BUY_POKEMON: {
            return {
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                pokemon: state.pokemon + action.payload
            }
        }
        default:return state;
    
    } 
}

//##### Store
const store = createStore(games_reducer);
console.log('Estado inicial: ', store.getState());
store.subscribe(() => {
    console.log('Cambio de estado: ', store.getState());
});
store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));