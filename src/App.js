import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {

const [pokemonData, setPokemonData] = useState({});
    useEffect(()=>{
                async function fetchData(){
                try {
                    const result = await axios.get('https://pokeapi.co/api/v2/pokemon/eevee');
                    setPokemonData(result.data);
                }catch(e){
                    console.error(e);
                }
            }
            fetchData();
    }, [])
  return (
    <div>
        {Object.keys(pokemonData).length > 0 &&

            <>
                <PokemonCard pokemondata = {pokemonData} />
            </>
        }
    </div>
  );
}

export default App;
