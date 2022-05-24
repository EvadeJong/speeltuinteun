import React, {useEffect, useState} from 'react';


function PokemonCard({pokemondata}){
    return(
        <>
           <h1>{pokemondata.name}</h1>
           <img src={pokemondata.sprites.front_default} alt={pokemondata.name}/>
           <h3>Moves:</h3>
           {pokemondata.moves.length}
           <h3>Weight:</h3>
           {pokemondata.weight}
           <h3>Abilities:</h3>
           <br/>{pokemondata.abilities[0].ability.name}
           <br/>{pokemondata.abilities[1].ability.name}
        </>
    )
}

export default PokemonCard;