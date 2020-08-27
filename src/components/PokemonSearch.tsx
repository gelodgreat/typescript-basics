import React, { FunctionComponent, useRef, useState } from 'react';
import User from '../interfaces/User.interface';

interface SearchState {
    error: boolean,
    pokemon: Pokemon
}

interface Pokemon {
    name: string,
    numberOfAbilities: number,
    baseExperience: number,
    imageUrl: string
}

const initialState = {
    pokemon: {
        name: '',
        numberOfAbilities: 0,
        baseExperience: 0,
        imageUrl: '',
    },
    error: false
}

const PokemonSearch = (props: User) => {
    const pokemonRef: any = useRef(null);

    const [data, setData] = useState<SearchState | null>(initialState)

    const onSearchClick = () => {
        const inputValue = pokemonRef.current.value
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(res => {
            if (res.status !== 200) {
                setData({ ...initialState, error: true })
                return;
            }
            res.json().then(fetchedData => {
                console.log(fetchedData)
                setData({
                    pokemon: {
                        name: fetchedData.name,
                        numberOfAbilities: fetchedData.abilities.length,
                        baseExperience: fetchedData.base_experience,
                        imageUrl: fetchedData.sprites.front_default,
                    },
                    error: false
                })
            })
        })
    }

    const addNumber = (a: number, b: number): number => { //it should return a number
        return a + b
    }

    let resultMarkup;
    if (data?.error) {
        resultMarkup = <p>Pokemon not found!</p>
    } else {
        resultMarkup = <div>
            <img src={data?.pokemon.imageUrl} alt="mewtwo" />
            <p>{data?.pokemon.name} has {data?.pokemon.numberOfAbilities} abilities and {data?.pokemon.baseExperience} points</p>
        </div>
    }

    return (
        <div>
            <p>
                User {props.name} has {props.numberOfPokemons} pokemons
                </p>
            <input type="text" ref={pokemonRef} />
            <button onClick={onSearchClick}>Search</button>
            {resultMarkup}
        </div>
    )
}




export default PokemonSearch