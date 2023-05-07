import React, { useEffect, useState } from 'react';

const Pokemon = ({ props }) => {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch(props)
        .then((r) => {
            if (r.ok){
                return r.json()
            }
        })
        .then((r) => setPokemon(r))
    }, [])
    
    if (pokemon != null)
    {
        return ( 
        <div className='pokemon'>
            <span className='container'><img className='image' src={pokemon.sprites.front_default} alt="" /></span>
            <p className='name'>{pokemon.name}</p>

            <div className='types'>
                {
                    pokemon.types.length == 1 ?
                    <p className='t' id={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</p> :
                    pokemon.types.map((e) => <p className='t' id={e.type.name}>{e.type.name}</p>) 
                }
            </div>
        </div>
     );
    }
}

 
export default Pokemon;